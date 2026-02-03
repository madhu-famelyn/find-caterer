import React, { useEffect, useState } from "react";
import "./CatererListing.css";
import FilterSidebar from "./FilterSidebar";
import CatererCardList from "./CatererCardList";
import Header from "../Header/Header";
import { useSearchParams } from "react-router-dom";

const LIMIT = 9;

const CatererListingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const country = searchParams.get("country") || "Spain";
  const page = Number(searchParams.get("page")) || 1;

  const [caterers, setCaterers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCaterers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, country]);

  const fetchCaterers = async () => {
    setLoading(true);
    try {
      const url = `http://localhost:8000/api/v1/caterers/caterers/by-location?country=${country}&page=${page}&limit=${LIMIT}`;
      console.log("🔵 Fetching URL:", url);

      const response = await fetch(url);
      const data = await response.json();

      console.log("🟢 Raw API response:", data);

      let list = [];

      // ✅ HANDLE BOTH BACKEND FORMATS
      if (Array.isArray(data)) {
        list = data;
      } else if (Array.isArray(data?.[0])) {
        list = data[0];
      }

      // 🔥 FORCE ONLY 9 ITEMS (even if backend sends 10)
      const limitedList = list.slice(0, LIMIT);

      console.log("✅ Final caterer list (max 9):", limitedList);
      setCaterers(limitedList);
    } catch (error) {
      console.error("❌ Failed to fetch caterers", error);
      setCaterers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="listing-page">
        <FilterSidebar />

        <div className="listing-content">
          {loading ? (
            <p>Loading caterers...</p>
          ) : (
            <CatererCardList caterers={caterers} />
          )}

          {/* Pagination */}
          <div className="pagination">
            <button
              disabled={page === 1}
              onClick={() =>
                setSearchParams({ country, page: page - 1 })
              }
            >
              Previous
            </button>

            <span>Page {page}</span>

            <button
              disabled={caterers.length < LIMIT}
              onClick={() =>
                setSearchParams({ country, page: page + 1 })
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatererListingPage;
