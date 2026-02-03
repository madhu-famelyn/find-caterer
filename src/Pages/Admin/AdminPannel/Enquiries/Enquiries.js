import React from "react";
import "./Enquiries.css";

const enquiriesData = [
  {
    id: 1,
    user: "User Name",
    caterer: "Caterer Name",
    event: "Event Type",
    date: "April 04, 2026",
    status: "Pending",
  },
  {
    id: 2,
    user: "User Name",
    caterer: "Caterer Name",
    event: "Event Type",
    date: "April 04, 2026",
    status: "Confirmed",
  },
  {
    id: 3,
    user: "User Name",
    caterer: "Caterer Name",
    event: "Event Type",
    date: "April 04, 2026",
    status: "Cancelled",
  },
  {
    id: 4,
    user: "User Name",
    caterer: "Caterer Name",
    event: "Event Type",
    date: "April 04, 2026",
    status: "Pending",
  },
];

const Enquiries = () => {
  return (
    <div className="enquiries-container">
      {/* Header */}
      <div className="enquiries-header">
        <h3>Recent Enquiries</h3>

        <input
          type="text"
          placeholder="Search..."
          className="enquiry-search"
        />
      </div>

      {/* Tabs */}
      <div className="enquiries-tabs">
        <span className="active">Today</span>
        <span>This Week</span>
        <span>This Month</span>
      </div>

      {/* Table */}
      <table className="enquiries-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Caterer</th>
            <th>Event Type</th>
            <th>Date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {enquiriesData.map((item) => (
            <tr key={item.id}>
              <td className="user-cell">
                <div className="user-avatar">👤</div>
                {item.user}
              </td>
              <td>{item.caterer}</td>
              <td>{item.event}</td>
              <td>{item.date}</td>
              <td>
                <span className={`status ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <span>Previous</span>
        <span className="active">1</span>
        <span>2</span>
        <span>Next</span>
      </div>
    </div>
  );
};

export default Enquiries;
