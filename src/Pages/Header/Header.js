import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/Logo/Logo.png";
import LoginPopup from "./LoginPopup";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-container">

          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="Fliplyn Logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="nav desktop-nav">
            <a href="/">Home</a>
            <a href="/explore">Explore</a>
            <a href="/about">About</a>

            {/* LOGIN BUTTON */}
            <button
              className="login-btn"
              onClick={() => setLoginOpen(true)}
            >
              Login <span className="arrow">▾</span>
            </button>

            <button className="cta-btn">Find Caterers</button>
          </nav>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* LOGIN POPUP */}
      {loginOpen && <LoginPopup onClose={() => setLoginOpen(false)} />}
    </>
  );
};

export default Header;
