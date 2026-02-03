import React from "react";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import RatingImg from "../../Assets/CatererListing/rating.png";

const CatererCardList = ({ caterers }) => {
  const navigate = useNavigate();

  // ✅ DEFENSIVE GUARD
  if (!Array.isArray(caterers) || caterers.length === 0) {
    return (
      <div className="card-grid">
        <p>No caterers found</p>
      </div>
    );
  }

  const handleViewProfile = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className="card-grid">
      {caterers.map((item) => (
        <div className="caterer-card" key={item.id}>
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
            alt="catering"
            className="card-img"
          />

          <h3>{item.business_name}</h3>

          <div className="tag-row">
            <span>Catering</span>
            <span>Event</span>
          </div>

          <div className="card-info">
            {/* Location */}
            <div className="location">
              <MdLocationOn className="location-icon" />
              {item.state || "N/A"}
            </div>

            {/* Rating */}
            <div className="rating">
              <img
                src={RatingImg}
                alt="rating"
                className="rating-img"
              />
              <span>{item.rating ?? "N/A"}</span>
            </div>
          </div>

          <button
            className="view-btn"
            onClick={() => handleViewProfile(item.id)}
          >
            View Profile
          </button>
        </div>
      ))}
    </div>
  );
};

export default CatererCardList;
