import React, { useState } from "react";
import "./LoginPopup.css";

import userIcon from "../../Assets/Login/User Icon 1.png";
import catererIcon from "../../Assets/Login/Caterer Icon.png"; 
// import RegisterCatererPopup from "../RegisterCatererPopup/RegisterCatererPopup";
// import UserRegisterPopup from "../RegisterUserPopup/RegisterUserPopup";
import UserLoginPopup from "../UserLoginPopup/UserLoginPopup";

import CatererLoginPopup from "../CatererLoginPopup/CatererLoginPopup";


const LoginPopup = ({ onClose }) => {
  const [showCatererForm, setShowCatererForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);

  const handleCatererClick = () => {
    setShowCatererForm(true);
  };

  const handleUserClick = () => {
    setShowUserForm(true);
  };

  const closeCatererForm = () => {
    setShowCatererForm(false);
  };

  const closeUserForm = () => {
    setShowUserForm(false);
  };

  return (
    <>
      <div className="login-overlay" onClick={onClose}>
        <div className="login-popup" onClick={(e) => e.stopPropagation()}>
          <div className="popup-arrow"></div>
          <h2>Continue as</h2>
          <div className="login-options">
            <div className="login-card user" onClick={handleUserClick}>
              <div className="icon-circle green">
                <img src={userIcon} alt="User" />
              </div>
              <h3>
                Continue as <span className="green-text">User</span>
              </h3>
              <p>Find and contact caterers</p>
            </div>
            <div className="login-card caterer" onClick={handleCatererClick}>
              <div className="icon-circle orange">
                <img src={catererIcon} alt="Caterer" />
              </div>
              <h3>
                Continue as <span className="orange-text">Caterer</span>
              </h3>
              <p>Manage your catering profile & enquiries</p>
            </div>
          </div>
        </div>
      </div>
      {showUserForm && <UserLoginPopup onClose={closeUserForm} />}
      {showCatererForm && (
        <CatererLoginPopup onClose={closeCatererForm} />
      )}
    </>
  );
};

export default LoginPopup;