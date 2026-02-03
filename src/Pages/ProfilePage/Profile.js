import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CatererHero from "./CatererHero/CatererHero";
import AboutSection from "./About/About";
import ServicesOffered from "./ServicesOffered/ServicesOffered";
import Gallery from "./Gallery/Gallery";
import EventCTA from "./EventCTA/EventCTA";

const ProfilePage = () => {
  const { catererId } = useParams();

  const [caterer, setCaterer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!catererId) {
      console.error("❌ catererId missing from URL");
      setLoading(false);
      return;
    }

    const fetchCaterer = async () => {
      try {
        console.log("🚀 Fetching Caterer:", catererId);

        const res = await fetch(
          `http://127.0.0.1:8000/api/v1/caterers/caterers/${catererId}`
        );

        if (!res.ok) {
          throw new Error("API failed");
        }

        const data = await res.json();

        console.log("✅ Caterer Loaded:", data);

        setCaterer({
          ...data,
          photo_folder_name: Array.isArray(data.photo_folder_name)
            ? data.photo_folder_name
            : [],
        });

      } catch (err) {
        console.error("❌ Fetch Error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCaterer();

  }, [catererId]);

  if (loading) return <h2 style={{ padding: 40 }}>Loading caterer...</h2>;
  if (error) return <h2 style={{ padding: 40 }}>Failed to load caterer.</h2>;
  if (!caterer) return <h2 style={{ padding: 40 }}>Caterer not found</h2>;

  return (
    <>
      <CatererHero caterer={caterer} />
      <AboutSection caterer={caterer} />
      <ServicesOffered caterer={caterer} />

      {caterer.photo_folder_name.length > 0 && (
        <Gallery photos={caterer.photo_folder_name} />
      )}

      <EventCTA
        latitude={caterer.latitude}
        longitude={caterer.longitude}
      />
    </>
  );
};

export default ProfilePage;
