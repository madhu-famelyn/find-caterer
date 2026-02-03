import React from "react";
import "./About.css";

const AboutSection = ({ caterer }) => {
  const { latitude, longitude, address } = caterer || {};

  // ✅ Google Maps embed URL
  const mapUrl =
    latitude && longitude
      ? `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`
      : null;

  // ✅ Open Google Maps for navigation
  const openMaps = () => {
    if (latitude && longitude) {
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
        "_blank"
      );
    }
  };

  return (
    <section className="about-section">
      {/* LEFT CONTENT */}
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          We are a Hyderabad-based catering service with over 10 years of
          experience handling weddings, corporate events, and private
          celebrations. Our mission is to provide exceptional food and service
          that make your events memorable. From traditional North Indian feasts
          to Continental delicacies, we customize our menu to suit your needs.
        </p>

        {address && (
          <p className="about-address">
            <strong>Address:</strong> {address}
          </p>
        )}

        {latitude && longitude && (
          <button className="map-nav-btn" onClick={openMaps}>
            Navigate to Location
          </button>
        )}
      </div>

      {/* RIGHT MAP */}
      <div className="about-image-wrapper map-wrapper">


        {mapUrl ? (
          <iframe
            title="Caterer Location"
            src={mapUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="map-placeholder">Location not available</div>
        )}

      </div>
    </section>
  );
};

export default AboutSection;
