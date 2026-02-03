// src/components/Hero/Hero.js
import "./Hero.css";
import Header from "../../Header/Header";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    // For now, force Spain (you can enhance later)
    navigate("/caterers?country=Spain&page=1");
  };

  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="hero-section__overlay">
          <div className="hero-section__content">
            <h1 className="hero-section__title">
              Find the Perfect Caterer <br /> for Your Event
            </h1>

            <p className="hero-section__subtitle">
              Discover trusted caterers for weddings, corporate events,
              birthdays, and more.
            </p>

            <div className="hero-search">
              <div className="hero-search__field">
                <FaMapMarkerAlt className="hero-search__icon" />
                <input
                  type="text"
                  placeholder="Enter Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="hero-search__input"
                />
              </div>

              <div className="hero-search__divider"></div>

              <div className="hero-search__field">
                <input
                  type="text"
                  placeholder="Select Event Type or Cuisine"
                  className="hero-search__input"
                />
              </div>

              <button
                className="hero-search__button"
                onClick={handleSearch}
              >
                Search Caterers
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
