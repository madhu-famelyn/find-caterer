import React, { useState } from "react";
import "./AdminLogin.css";
import adminIllustration from "../../../Assets/Admin/AdminLogin/Admin Login.svg";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (  
    <div className="admin-login-container">
      {/* LEFT SECTION */}
      <div className="admin-login-left-panel">
        <img
          src={adminIllustration}
          alt="Admin Login Illustration"
          className="admin-login-image"
        />

        <h2 className="admin-login-title">Welcome back!</h2>
        <p className="admin-login-subtitle">
          Caterer management made easy
        </p>

        <ul className="admin-login-features">
          <li className="admin-login-feature-item">
            Approve and manage catering partners
          </li>
          <li className="admin-login-feature-item">
            Monitor user activity and enquiries
          </li>
          <li className="admin-login-feature-item">
            Keep the platform secure and efficient
          </li>
        </ul>
      </div>

      {/* RIGHT SECTION */}
      <div className="admin-login-right-panel">
        <form
          className="admin-login-card"
          onSubmit={handleSubmit}
        >
          <h3 className="admin-login-card-title">
            Admin Panel Login
          </h3>

          <p className="admin-login-card-subtitle">
            Sign in to manage the platform
          </p>

          <div className="admin-login-form-group">
            <label className="admin-login-label">
              Admin Email
            </label>
            <input
              type="email"
              placeholder="admin@example.com"
              className="admin-login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="admin-login-form-group">
            <label className="admin-login-label">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="admin-login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="admin-login-forgot-password">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="admin-login-submit-btn"
          >
            Login
          </button>


          <p className="admin-login-footer-text">
            © 2026 Admin Dashboard. All right reserved.
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
