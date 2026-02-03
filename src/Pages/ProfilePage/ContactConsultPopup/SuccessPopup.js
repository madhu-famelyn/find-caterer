import "./SuccessPopup.css";

// Icons
import successCheck from "../../../Assets/ProfilePage/Tick (1).png";
import mailIcon from "../../../Assets/ProfilePage/mail.png";
import phoneIcon from "../../../Assets/ProfilePage/call.png";
import sparkleIcon from "../../../Assets/ProfilePage/star.png";

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="success-card">
        {/* Success Icon */}
        <div className="success-icon">
          <img src={successCheck} alt="Success" />
        </div>

        <h2>Request Sent Successfully!</h2>

        <p className="success-text">
          Your request has been shared with <b>Gourmet Delights</b>.
          <br />
          They will contact you shortly.
        </p>

        <div className="next-steps">
          <h4>What Happens Next:</h4>

          <div className="step">
            <span className="step-icon">
              <img src={mailIcon} alt="Mail" />
            </span>
            Caterer receives your request.
          </div>

          <div className="step">
            <span className="step-icon">
              <img src={phoneIcon} alt="Call" />
            </span>
            They will contact you via phone or email
          </div>

          <div className="step">
            <span className="step-icon">
              <img src={sparkleIcon} alt="Finalize" />
            </span>
            Discuss details & finalize your event
          </div>
          <div className="success-actions">
          <button className="primary-btn">View My Requests</button>
          <button className="secondary-btn" onClick={onClose}>
            Back to Home
          </button>
        </div>

        <p className="note">
          Your contact details are shared only with the selected caterer.
        </p>
        </div>

        
      </div>
    </div>
  );
};

export default SuccessPopup;
