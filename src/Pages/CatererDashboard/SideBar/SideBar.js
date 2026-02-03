import React from "react";
import "./SideBar.css";
import { sidebarMenu } from "./SideBarData";

const Sidebar = ({ active = "Dashboard" }) => {
  return (
    <aside className="sidebar">
      <h3 className="logo">🍽 FindCaters</h3>

      <ul className="menu">
        {sidebarMenu.map((item, index) => {
          const Icon = item.icon;

          return (
            <li
              key={index}
              className={`${item.label === active ? "active" : ""} ${
                item.isLogout ? "logout" : ""
              }`}
            >
              <Icon />
              {item.label}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
