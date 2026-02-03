import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaUser,
  FaCheckCircle,
  FaChartBar,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";
import logo from "../../../Assets/Logo/Logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <img src={logo} alt="Fliplyn Logo" className="sidebar-logo-img" />
      </div>

      {/* Menu */}
      <nav className="sidebar-menu">
        <NavLink to="/admin" className="menu-item">
          <FaHome className="menu-icon" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/caterers" className="menu-item">
          <FaUsers className="menu-icon" />
          <span>Caterers</span>
        </NavLink>

        <NavLink to="/users" className="menu-item">
          <FaUser className="menu-icon" />
          <span>Users</span>
        </NavLink>

        <NavLink to="/verifications" className="menu-item">
          <FaCheckCircle className="menu-icon" />
          <span>Verifications</span>
        </NavLink>

        <NavLink to="/reports" className="menu-item">
          <FaChartBar className="menu-icon" />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/enquiries" className="menu-item">
          <FaEnvelope className="menu-icon" />
          <span>Enquiries</span>
        </NavLink>

        <NavLink to="/settings" className="menu-item">
          <FaCog className="menu-icon" />
          <span>Settings</span>
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="sidebar-logout">
        <FaSignOutAlt className="logout-icon" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
