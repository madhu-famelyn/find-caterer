import React from "react";
import "./ServicesOffered.css";

// Images
import weddingImg from "../../../Assets/ProfilePage/Wedding Catering.png";
import corporateImg from "../../../Assets/ProfilePage/Corporate Events.png";
import birthdayImg from "../../../Assets/ProfilePage/Birthday Parties.png";
import customImg from "../../../Assets/ProfilePage/Custom Menus.png";

const ServicesOffered = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Services Offered</h2>

      <div className="services-grid">
        <div className="service-card">
          <img src={weddingImg} alt="Wedding Catering" />
          <div>
            <h4>Wedding Catering</h4>
            <p>Elegant wedding meals</p>
          </div>
        </div>

        <div className="service-card">
          <img src={corporateImg} alt="Corporate Events" />
          <div>
            <h4>Corporate Events</h4>
            <p>Professional event catering</p>
          </div>
        </div>

        <div className="service-card">
          <img src={birthdayImg} alt="Birthday Parties" />
          <div>
            <h4>Birthday Parties</h4>
            <p>Fun party catering</p>
          </div>
        </div>

        <div className="service-card">
          <img src={customImg} alt="Custom Menus" />
          <div>
            <h4>Custom Menus</h4>
            <p>Tailored menu options</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOffered;