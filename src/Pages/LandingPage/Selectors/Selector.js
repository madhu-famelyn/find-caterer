// src/components/CategorySelectors/CategorySelectors.js
import React from "react";
import "./Selector.css";

import cardBg from "../../../Assets/LandingPage/card-background.png";
import weddingImg from "../../../Assets/LandingPage/Wedding Catering.png";
import corporateImg from "../../../Assets/LandingPage/Corporate Events.png";
import birthdayImg from "../../../Assets/LandingPage/Birthday Parties.png";
import privateImg from "../../../Assets/LandingPage/Private Gatherings.png";

const categories = [
  {
    title: "Wedding Catering",
    image: weddingImg,
  },
  {
    title: "Corporate Events",
    image: corporateImg,
  },
  {
    title: "Birthday Parties",
    image: birthdayImg,
  },
  {
    title: "Private Gatherings",
    image: privateImg,
  },
];

const CategorySelectors = () => {
  return (
    <section className="category-section">
      <div className="category-container">
        {categories.map((item, index) => (
          <button
            key={index}
            className="category-card"
            style={{ backgroundImage: `url(${cardBg})` }}
            onClick={() => {}}
          >
            <div className="category-card-content">
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategorySelectors;