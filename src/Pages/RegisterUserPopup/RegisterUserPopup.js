import React, { useState } from "react";
import "./RegisterUserPopup.css";
import { FaEye, FaEyeSlash, FaUserCircle } from "react-icons/fa";

const UserRegisterPopup = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    user_name: "",
    phone_number: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    const payload = {
      user_name: formData.user_name,
      phone_number: formData.phone_number,
      email: formData.email || null,
      password: formData.password,
    };

    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        alert(err.detail || "Failed to create user");
        return;
      }

      alert("User account created successfully 🎉");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="user-register-overlay">
      <div className="user-register-card">
        {/* Close Button */}
        <button className="user-close-btn" onClick={onClose}>
          ✕
        </button>

        {/* Header */}
        <div className="user-register-header">
          <div className="user-avatar">
            <FaUserCircle />
          </div>
          <h2>Register as User</h2>
          <p>Create your account to find and book caterers</p>
        </div>

        {/* Body */}
        <div className="user-register-body">
          <h4 className="section-title">User Information</h4>

          <div className="form-grid">
            <div className="form-group">
              <label>User Name*</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phone Number*</label>
              <input
                type="text"
                name="phone_number"
                placeholder="+91 9XXXXXXXXX"
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label>Password*</label>
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="********"
                  onChange={handleChange}
                />
                <span className="eye" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label>Re-enter Password*</label>
              <div className="password-field">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirm_password"
                  placeholder="********"
                  onChange={handleChange}
                />
                <span
                  className="eye"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <small>Must be at least 8 characters</small>
            </div>

            <div className="form-group full">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address (Optional)"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="user-register-footer">
          <button className="submit-btn" onClick={handleSubmit}>
            Create User Account
          </button>
          <p>
            Already have an account?
            <span onClick={onClose}> Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegisterPopup;
