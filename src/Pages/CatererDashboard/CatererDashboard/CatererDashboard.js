import "./CatererDashboard.css";

import headerImg from "../../../Assets/CatererDashboard/Dashboardimage.png";
import profileImg from "../../../Assets/CatererDashboard/Profile.png";
import totalEnquiresImg from "../../../Assets/CatererDashboard/Total Enquires.png";
import newEnquiresImg from "../../../Assets/CatererDashboard/New Enquires.png";

import Header from "../../Header/Header";
import Sidebar from "../SideBar/SideBar";
import Footer from "../../Footer/Footer";

const CatererDashboard = () => {
  return (
    <>
      <Header />

      <div className="dashboard-container">
        <Sidebar active="Dashboard" />

        <main className="main-content">

          <div className="welcome-card">
            <div className="welcome-text">
              <h2>👋 Hi Caterer</h2>
              <p>Manage your enquiries and business profile</p>
            </div>
            <img src={headerImg} alt="Welcome" />
          </div>

          <h3 className="section-title">Recent Enquiries</h3>

          {/* Stats */}
          <div className="stats-row">
            <div className="stat-card green">
              <img src={newEnquiresImg} alt="New" />
              <h2>2</h2>
              <p>New Enquires</p>
            </div>

            <div className="stat-card orange">
              <img src={totalEnquiresImg} alt="Total" />
              <h2>23</h2>
              <p>Total Enquires</p>
            </div>

            <div className="stat-card white">
                 <img src={totalEnquiresImg} alt="Total" />
                  <h2>80%</h2>
              <p>Profile Completion</p>
            </div>
          </div>

          {/* Enquiry Card */}
          <div className="enquiry-card">
            <div className="enquiry-left">
              <div className="avatar">
                <img src={profileImg} alt="User" />
              </div>

              <div className="enquiry-info">
                <h4>User 1</h4>
                <p className="party-type">Party Type</p>

                <div className="meta">
                  <span>📅 Apr 4, 2004</span>
                  <span>📍 Location</span>
                </div>
              </div>
            </div>

            <div className="enquiry-right">
              <span className="badge">New</span>

              <div className="actions">
                <button className="btn-outline">View Details</button>
                <button className="btn-primary">Contact User</button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default CatererDashboard;
