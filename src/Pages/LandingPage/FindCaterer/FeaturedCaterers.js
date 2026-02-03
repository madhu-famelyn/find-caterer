import React from "react";
import "./FeaturedCaterers.css";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";


import upperBg from "../../../Assets/LandingPage/FeaturedCaterers/Upper Background.png";
import lowerBg from "../../../Assets/LandingPage/FeaturedCaterers/Lower Background.png";
import catererImg from "../../../Assets/LandingPage/FeaturedCaterers/Caterer.png";

// import FindCatersBG from "../../../Assets/LandingPage/FeaturedCaterers/Choose FindCaters Background.png";

import verifiedIcon from "../../../Assets/LandingPage/FeaturedCaterers/Verified Caterers.png";
import easyIcon from "../../../Assets/LandingPage/FeaturedCaterers/Easy Consultation.png";
import trustedIcon from "../../../Assets/LandingPage/FeaturedCaterers/Trusted for Events.png";

const FeaturedCaterers = () => {
  return (
    <section className="featured-wrapper">
      {/* ================= TOP SECTION ================= */}
      <div
        className="featured-top"
        style={{ backgroundImage: `url(${upperBg})` }}
      >
        <h2 className="section-title">Featured Caterers</h2>
        <p className="section-subtitle">
          Handpicked Professionals trusted by customers.
        </p>

        <div className="caterer-grid">
          {[1, 2, 3, 4].map((_, index) => (
            <div className="caterer-card" key={index}>
              <img src={catererImg} alt="Caterer" />
              <h4>Caterer Name</h4>

              <div className="tags">
                <span>North Indian</span>
                <span>Continental</span>
              </div>
              <div className="meta">
                <span className="meta-item">
                  <FaMapMarkerAlt /> Hyderabad
                </span>
                <span className="meta-item">
                  <FaStar /> 4.6
                </span>
              </div>



              <button>View Profile</button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= OVERLAP SECTION ================= */}
      <div className="why-choose-wrapper">
        <h2 className="section-title">Why Choose FindCaters?</h2>
        <p className="section-subtitle">
          Handpicked Professionals trusted by customers.
        </p>

        <div className="why-grid">
          <div className="why-card">
            <img src={verifiedIcon} alt="Verified" />
            <h4>Verified Caterers</h4>
            <p>Professionally vetted and trusted</p>
          </div>

          <div className="why-card">
            <img src={easyIcon} alt="Easy" />
            <h4>Easy Consultation</h4>
            <p>Quick and hassle-free booking</p>
          </div>

          <div className="why-card">
            <img src={trustedIcon} alt="Trusted" />
            <h4>Trusted for Events</h4>
            <p>Your event, our priority</p>
          </div>
               <div
        className="featured-bottom"
        style={{ backgroundImage: `url(${lowerBg})` }}
      >
       
      </div>
       <div className="cta-wrapper">
          <button className="cta-btn">Find Caterers Near You</button>
        </div>

        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
 
    </section>
  );
};

export default FeaturedCaterers;
