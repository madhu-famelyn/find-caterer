import React from "react";
import "./DashboardCards.css";
import totalCatererImg from "../../../../Assets/Admin/AdminPannel/Total Caterer.svg";

const TotalCaterersCard = () => {
  return (
    <div className="dashboard-card">
      <div className="card-left">
        <div className="card-icon">👨‍🍳</div>
        <p>Total Caterers</p>
        <h3>328</h3>
      </div>

      <img
        src={totalCatererImg}
        alt="Total Caterers"
        className="card-image"
      />
    </div>
  );
};

export default TotalCaterersCard;
