import React from "react";
import "./RegisterCatererPopup.css";
import RegisterCatererForm from "./RegisterCatererForm";

const RegisterCatererPopup = ({ onClose }) => {

  const createCaterer = async (payload) => {
    try {
      const res = await fetch(
        "http://127.0.0.1:8000/api/v1/caterers/caterers/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const err = await res.json();
        alert(err.detail || "Failed to register");
        return;
      }

      alert("Caterer registered successfully 🎉");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="register-overlay">
      <div className="register-card">
        <button className="register-close-btn" onClick={onClose}>✕</button>

        <div className="register-header">
          <h2>Register as Caterer</h2>
          <p>Create your catering business profile</p>
        </div>

        <RegisterCatererForm onSubmit={createCaterer} />
      </div>
    </div>
  );
};

export default RegisterCatererPopup;























// import React from "react";
// import "./RegisterCatererPopup.css";
// import RegisterCatererForm from "./RegisterCatererForm";

// const RegisterCatererPopup = ({ onClose }) => {
//   return (
//     <div className="register-overlay">
//       <div className="register-card">
//         {/* Close Button */}
//         <button className="register-close-btn" onClick={onClose}>
//           ✕
//         </button>

//         {/* Header */}
//         <div className="register-header">
//           <h2>Register as Caterer</h2>
//           <p>Create your catering business profile</p>
//         </div>

//         {/* Body */}
//         <RegisterCatererForm />

//         {/* Footer */}
//         <div className="register-footer">
//           <button className="submit-btn">Create Caterer Account</button>
//           <p>
//             Already have an account?
//             <span onClick={onClose}> Login as Caterer</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterCatererPopup;
