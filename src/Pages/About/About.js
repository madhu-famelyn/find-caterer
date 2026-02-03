import React from "react";
import "./About.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import aboutImage from "../../Assets/About/AboutBackground.svg";

const AboutUs = () => {
  return (
    <>
      <Header />

      <section
        className="about-section"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        {/* Overlay */}
        <div className="about-overlay"></div>

        {/* Content */}
        <div className="about-content-wrapper">
          <h2 className="about-title">About Us</h2>

          <p className="about-text">
            <strong>FindCaters</strong> is a curated platform that connects people
            with trusted and verified caterers for every kind of event — from
            intimate family gatherings to large-scale celebrations.
            <br />
            <br />
            We simplify the process of discovering, comparing, and contacting
            caterers by bringing all essential information into one transparent
            and easy-to-use platform.
          </p>

          <h3 className="about-subtitle">What We Do</h3>

          <p className="about-text">
            FindCaters makes it easy to discover trusted caterers based on
            location, cuisine, budget, and event type. View detailed profiles,
            real photos, and services, then connect directly with caterers —
            <strong> no middlemen, no booking fees.</strong> We help you find the
            right caterer faster and with confidence.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
