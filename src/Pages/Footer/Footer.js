import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col brand">
          <h3>FindCaters</h3>
          <p>
            Find trusted caterers for weddings, parties, and corporate events
          </p>

          <ul className="features">
            <li>Verified Caterers</li>
            <li>Secure Contact</li>
            <li>No Booking Fees</li>
          </ul>
        </div>

        {/* EXPLORE */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>Explore Caterers</li>
            <li>Wedding Caterers</li>
            <li>Corporate Events</li>
            <li>Private Gatherings</li>
          </ul>
        </div>

        {/* FOR CATERERS */}
        <div className="footer-col">
          <h4>For Caterers</h4>
          <ul>
            <li>Join as Caterer</li>
            <li>Login as Caterer</li>
            <li>How It Works</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="socials">
          <FaFacebookF />
          <FaXTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>

        <p>© 2026 FindCaters. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
