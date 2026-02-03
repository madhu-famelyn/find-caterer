import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./AdminPannel.css";
import TotalCaterersCard from "./Cards/TotalCaterersCard";
import PendingVerificationCard from "./Cards/PendingVerificationCard";
import TotalUsersCard from "./Cards/TotalUserCards";
import Enquiries from "./Enquiries/Enquiries";

const AdminPannel = () => {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-main">
        {/* Header */}
        <div className="admin-header">
          <h2>Admin Panel</h2>

          <div className="admin-header-right">
            <span className="notification-icon">🔔</span>
            <div className="admin-profile">
              <div className="profile-avatar">A</div>
              <span>Admin</span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="dashboard-cards">
          <TotalCaterersCard />
          <PendingVerificationCard />
          <TotalUsersCard />
        </div>

        {/* Enquiries Table */}
        <Enquiries />
      </div>
    </div>
  );
};

export default AdminPannel;
