import React, { useState, useEffect } from "react";
import "./CatererHero.css";
import Header from "../../Header/Header";
import { MdLocationOn } from "react-icons/md";
import ContactConsultPopup from "../ContactConsultPopup/ContactConsultPopup";

// Images
import priceImg from "../../../Assets/ProfilePage/Prize Range.png";
import capacityImg from "../../../Assets/ProfilePage/Capacity.png";
import eventImg from "../../../Assets/ProfilePage/Event Types.png";
import serviceImg from "../../../Assets/ProfilePage/Service Area.png";

const CatererHero = ({ caterer }) => {
  const [showPopup, setShowPopup] = useState(false);

  const heroImage =
    caterer?.photo_folder_name?.length > 0
      ? caterer.photo_folder_name[0]
      : "";

  // 🔍 DEBUG LOGS
  useEffect(() => {
    // console.log("🖼️ Caterer photos:", caterer?.photo_folder_name);
    // console.log("🎯 Hero image selected:", heroImage);
  }, [caterer, heroImage]);

  return (
    <>
      <Header />

      {showPopup && <ContactConsultPopup onClose={() => setShowPopup(false)} />}

      <section
        className="caterer-hero"
        style={{
          backgroundImage: heroImage
            ? `linear-gradient(
                rgba(0, 0, 0, 0.55),
                rgba(0, 0, 0, 0.55)
              ), url(${heroImage})`
            : undefined,
        }}
      >
        <div className="hero-content">
          <h1>{caterer.business_name}</h1>

          <div className="tag-list">
            {caterer.cuisine_type ? (
              caterer.cuisine_type.split(",").map((cuisine, idx) => (
                <span key={idx}>{cuisine.trim()}</span>
              ))
            ) : (
              <span>General Catering</span>
            )}
          </div>

          <div className="location-profile">
            <MdLocationOn size={18} color="#ff6a00" />
            <span>{caterer.state || caterer.city || "N/A"}</span>
          </div>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => setShowPopup(true)}>
              Contact Now
            </button>

            <a
              href={caterer.website}
              target="_blank"
              rel="noreferrer"
              className="btn-outline hero-visit-link"
            >
              Visit Website
            </a>
          </div>
        </div>

        <div className="hero-info-card">
          <div className="info-item">
            <img src={priceImg} alt="Price Range" className="info-img" />
            <div>
              <p className="info-title">Price Range</p>
              <p className="info-value">{caterer.price_range || "N/A"}</p>
            </div>
          </div>

          <div className="info-item">
            <img src={capacityImg} alt="Capacity" className="info-img" />
            <div>
              <p className="info-title">Capacity</p>
              <p className="info-value">
                {caterer.capacity_min || 0} – {caterer.capacity_max || 0} Guests
              </p>
            </div>
          </div>

          <div className="info-item">
            <img src={eventImg} alt="Event Types" className="info-img" />
            <div>
              <p className="info-title">Event Types</p>
              <p className="info-value">{caterer.event_type || "N/A"}</p>
            </div>
          </div>

          <div className="info-item">
            <img src={serviceImg} alt="Service Area" className="info-img" />
            <div>
              <p className="info-title">Service Area</p>
              <p className="info-value">{caterer.city || caterer.state}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CatererHero;
