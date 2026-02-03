import React from "react";
import "./DashboardCards.css";
import usersImg from "../../../../Assets/Admin/AdminPannel/Total Users.svg";

const TotalUsersCard = () => {
  return (
    <div className="dashboard-card">
      <div className="card-left">
        <div className="card-icon">👥</div>
        <p>Total Users</p>
        <h3>1,642</h3>
      </div>

      <img src={usersImg} alt="Total Users" className="card-image" />
    </div>
  );
};

export default TotalUsersCard;
