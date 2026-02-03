import React from "react";
import { MdLocationOn } from "react-icons/md";
import "./FilterSideBar.css";

const FilterSidebar = () => {
  return (
    <aside className="fs-sidebar">
      <h3 className="fs-title">Filters</h3>

      {/* Location */}
      <section className="fs-section">
        <div className="fs-section-header">
          <span>Location</span>
          <button className="fs-change-btn">Change</button>
        </div>

        <div className="fs-location">
          <MdLocationOn className="fs-location-icon" />
          <span>Hyderabad</span>
        </div>
      </section>

      {/* Event Type */}
      <section className="fs-section">
        <h4 className="fs-subtitle">Event Type</h4>

        <label className="fs-checkbox-row">
          <input type="checkbox" defaultChecked />
          <span>Wedding</span>
        </label>

        <label className="fs-checkbox-row">
          <input type="checkbox" />
          <span>Corporate</span>
        </label>

        <label className="fs-checkbox-row">
          <input type="checkbox" />
          <span>Birthday</span>
        </label>

        <label className="fs-checkbox-row">
          <input type="checkbox" />
          <span>Private</span>
        </label>
      </section>

      {/* Cuisine */}
      <section className="fs-section">
        <h4 className="fs-subtitle">Cuisine</h4>

        <div className="fs-cuisine-tags">
          <span className="fs-tag fs-tag-active">North Indian</span>
          <span className="fs-tag fs-tag-active">South Indian</span>
          <span className="fs-tag">Chinese</span>
          <span className="fs-tag">Continental</span>
          <span className="fs-tag">Mughlai</span>
        </div>
      </section>

      {/* Rating */}
      <section className="fs-section">
        <h4 className="fs-subtitle">Rating</h4>

        <label className="fs-checkbox-row">
          <input type="checkbox" defaultChecked />
          <span>4★ & above</span>
        </label>

        <label className="fs-checkbox-row">
          <input type="checkbox" />
          <span>3★ & above</span>
        </label>
      </section>
    </aside>
  );
};

export default FilterSidebar;
