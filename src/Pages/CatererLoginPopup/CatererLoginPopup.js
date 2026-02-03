import React, { useState } from "react";
import "./CatererLoginPopup.css";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import catererIcon from "../../Assets/Login/Caterer Icon.png"; // your image

const CatererLoginPopup = ({ onClose, onRegisterClick }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="caterer-login-overlay">
      <div className="caterer-login-popup">
        {/* HEADER */}
        <div className="caterer-login-header">
          <div className="caterer-image-wrapper">
            <img src={catererIcon} alt="Caterer" />
          </div>

          <h2>
            Login as <span>Caterer</span>
          </h2>
          <p>Manage your catering profile & enquiries</p>
        </div>

        {/* BODY */}
        <div className="caterer-login-body">
          {/* Email */}
          <div className="input-group">
            <input type="email" placeholder="Email" />
            <FaEnvelope className="input-icon" />
          </div>

          {/* Password */}
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

          <button className="caterer-login-btn">Login</button>

          <p className="register-text">
            Don’t have an account?
            <span
              onClick={() => {
                onClose && onClose();
                onRegisterClick && onRegisterClick();
              }}
            >
              {" "}
              Register as Caterer
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatererLoginPopup;
