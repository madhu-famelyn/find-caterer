import React, { useState } from "react";
import "./EventCTA.css";
import ContactConsultPopup from "../ContactConsultPopup/ContactConsultPopup";

const EventCTA = ({ latitude, longitude }) => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showMapConfirm, setShowMapConfirm] = useState(false);

  const handleContactClick = () => {
    console.log("Contact Now clicked");
    setShowContactPopup(true);
  };

  const handleVisitClick = () => {
    console.log("Visit Now clicked");
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);

    if (!latitude || !longitude) {
      alert("Location not available");
      return;
    }

    setShowMapConfirm(true);
  };

  const handleMapConfirmYes = () => {
    const lat = Number(latitude);
    const lng = Number(longitude);

    console.log("Navigating to Google Maps:", lat, lng);

    const mapUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(mapUrl, "_blank");

    setShowMapConfirm(false);
  };

  const handleMapConfirmNo = () => {
    console.log("Map navigation cancelled");
    setShowMapConfirm(false);
  };

  return (
    <>
      <section className="event-cta">
        <h3>Ready to make your event unforgettable?</h3>

        <div className="cta-buttons">
          <button
            className="cta-btn primary"
            onClick={handleContactClick}
          >
            Contact Now
          </button>

          <button
            className="cta-btn secondary"
            onClick={handleVisitClick}
          >
            Visit Now
          </button>
        </div>
      </section>

      {/* CONTACT POPUP */}
      {showContactPopup && (
        <ContactConsultPopup
          onClose={() => setShowContactPopup(false)}
        />
      )}

      {/* MAP CONFIRMATION POPUP */}
      {showMapConfirm && (
        <div className="cta-confirm-overlay">
          <div className="cta-confirm-box">
            <h4>Open Google Maps?</h4>
            <p>You will be redirected to Google Maps to view the location.</p>

            <div className="cta-confirm-actions">
              <button
                className="cta-btn primary"
                onClick={handleMapConfirmYes}
              >
                OK
              </button>
              <button
                className="cta-btn secondary"
                onClick={handleMapConfirmNo}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCTA;
