import React from "react";
import "./DashboardCards.css";
import pendingImg from "../../../../Assets/Admin/AdminPannel/Pending Verifications.svg";

const PendingVerificationCard = () => {
  return (
    <div className="dashboard-card">
      <div className="card-left">
        <div className="card-icon">✔️</div>
        <p>Pending Verifications</p>
        <span className="view-link">View ›</span>
      </div>

      <img
        src={pendingImg}
        alt="Pending Verification"
        className="card-image"
      />
    </div>
  );
};

export default PendingVerificationCard;
