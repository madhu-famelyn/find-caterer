 import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./ContactConsultPopup.css";
import SuccessPopup from "./SuccessPopup";
import foodImg from "../../../Assets/ProfilePage/Gallary.png";

const ContactConsultPopup = ({ onClose }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // simulate API success
    setTimeout(() => {
      setShowSuccess(true);
    }, 500);
  };

  if (showSuccess) {
    return <SuccessPopup onClose={onClose} />;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        {/* Header */}
        <div className="popup-header">
          <h3>Contact / Consult Gourmet Delights</h3>

          {/* ❌ X CLOSE ICON */}
          <button
            className="close-btn-contact"
            onClick={onClose}
            aria-label="Close popup"
          >
            <FaTimes />
          </button>
        </div>

        {/* Caterer Info */}
        <div className="caterer-info">
          <div className="caterer-left">
            <h4>Gourmet Delights</h4>

            <p className="location">
              <span className="dot"></span> Hyderabad
            </p>

            <div className="tags">
              <span>North Indian</span>
              <span>Continental</span>
              <span>South Indian</span>
            </div>
          </div>

          <img src={foodImg} alt="Catering" />
        </div>

        {/* Form */}
        <form className="popup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <div className="phone-row">
              <select>
                <option>+91</option>
              </select>
              <input type="text" placeholder="93929 77592" required />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="abc@gmail.com" />
          </div>

          <div className="form-group">
            <label>Event Type *</label>
            <select required>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Corporate</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Tell the caterer a bit about your event"></textarea>
          </div>

          <p className="note">
            Your contact details are shared only with the selected caterer.
          </p>

          <div className="popup-actions">
            <button type="submit" className="send-btn">
              Send Request
            </button>
            <button type="button" className="consult-btn">
              Consult Instead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactConsultPopup;
