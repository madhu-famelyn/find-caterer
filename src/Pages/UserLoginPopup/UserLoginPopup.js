import React, { useState } from "react";
import "./UserLoginPopup.css";
import { FaEnvelope, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import userIcon from "../../Assets/Login/User Icon 1.svg";

const UserLoginPopup = ({ onClose, onRegisterClick }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="user-login-overlay">
      <div className="user-login-popup">
        {/* CLOSE BUTTON */}
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close login popup"
        >
          <FaTimes />
        </button>

        {/* HEADER */}
        <div className="user-login-header">
          <div className="user-image-wrapper">
            <img src={userIcon} alt="User" />
          </div>
          <h2>
            Login as <span>User</span>
          </h2>
          <p>Manage your catering profile & enquiries</p>
        </div>

        {/* BODY */}
        <div className="user-login-body">
          <div className="input-group">
            <input type="email" placeholder="Email" />
            <FaEnvelope className="input-icon" />
          </div>

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span
              className="input-icon clickable"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="forgot-password">Forgot password?</div>

          <button className="user-login-btn">Login</button>

          <p className="register-text">
            Don’t have an account?
            <span
              onClick={() => {
                onClose();
                onRegisterClick();
              }}
            >
              {" "}
              Register as User
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLoginPopup;
