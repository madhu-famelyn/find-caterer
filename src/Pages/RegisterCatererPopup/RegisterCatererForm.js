import React, { useState } from "react";
import uploadImage from "../../Assets/Login/Upload.png";

const RegisterCatererForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    business_name: "",
    phone_number: "",
    email: "",
    password: "",
    confirm_password: "",
    description: "",
    services_offered: "",
    cuisine_type: "",
    event_type: "",
    price_range: "",
    capacity_min: "",
    capacity_max: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    address_line: "",
    gallery_images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    const payload = {
      business_name: formData.business_name,
      phone_number: formData.phone_number,
      email: formData.email || null,
      password: formData.password,
      description: formData.description,
      services_offered: formData.services_offered,
      cuisine_type: formData.cuisine_type,
      event_type: formData.event_type,
      price_range: formData.price_range,
      capacity_min: Number(formData.capacity_min),
      capacity_max: Number(formData.capacity_max),
      country: formData.country,
      state: formData.state,
      city: formData.city,
      pincode: formData.pincode,
      address_line: formData.address_line,
      gallery_images: formData.gallery_images
    };

    onSubmit(payload);
  };

  return (
    <div className="register-body">
      <h4 className="section-title">Business Information</h4>

      <div className="form-grid">
        <input name="business_name" placeholder="Business Name" onChange={handleChange} />
        <input name="phone_number" placeholder="+91 9XXXXXXXXX" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input type="password" name="confirm_password" placeholder="Confirm Password" onChange={handleChange} />
        <input className="full" name="email" placeholder="Email (optional)" onChange={handleChange} />
      </div>

      <h4 className="section-title">Gallery</h4>
      <div className="upload-box">
        <img src={uploadImage} alt="upload" />
        <p>Image upload can be integrated later</p>
      </div>

      <h4 className="section-title">About</h4>
      <textarea name="description" placeholder="Description" onChange={handleChange} />

      <h4 className="section-title">Services Offered</h4>
      <input name="services_offered" placeholder="Services" onChange={handleChange} />

      <div className="form-grid">
        <input name="cuisine_type" placeholder="Cuisine Type" onChange={handleChange} />
        <input name="event_type" placeholder="Event Type" onChange={handleChange} />
        <input name="price_range" placeholder="Price Range" onChange={handleChange} />

        <div className="capacity-row">
          <input name="capacity_min" type="number" placeholder="Min" onChange={handleChange} />
          <input name="capacity_max" type="number" placeholder="Max" onChange={handleChange} />
        </div>
      </div>

      <h4 className="section-title">Address</h4>
      <div className="form-grid">
        <input name="country" placeholder="Country" onChange={handleChange} />
        <input name="state" placeholder="State" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />
        <input name="pincode" placeholder="PIN" onChange={handleChange} />
        <input className="full" name="address_line" placeholder="Address Line" onChange={handleChange} />
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Create Caterer Account
      </button>
    </div>
  );
};

export default RegisterCatererForm;


















// import React from "react";
// import uploadImage from "../../Assets/Login/Upload.png";

// const RegisterCatererForm = () => {
//   return (
//     <div className="register-body">
//       {/* Business Info */}
//       <h4 className="section-title">Business Information</h4>

//       <div className="form-grid">
//         <div className="form-group">
//           <label>Business Name*</label>
//           <input type="text" placeholder="Business Name" />
//         </div>

//         <div className="form-group">
//           <label>Phone Number*</label>
//           <input type="text" placeholder="+91 9392977592" />
//         </div>

//         <div className="form-group">
//           <label>Password*</label>
//           <input type="password" placeholder="********" />
//         </div>

//         <div className="form-group">
//           <label>Re-enter Password*</label>
//           <input type="password" placeholder="********" />
//           <small>Must be at least 8 characters</small>
//         </div>

//         <div className="form-group full">
//           <label>Email</label>
//           <input type="email" placeholder="Email Address (Optional)" />
//         </div>
//       </div>

//       {/* Gallery */}
//       <h4 className="section-title">Gallery*</h4>

//       <div className="upload-box">
//         <div className="upload-icon">
//           <img src={uploadImage} alt="Upload" />
//         </div>
//         <div>
//           <p>Add photos of your catering business (up to 6)</p>
//           <span>JPEG or PNG (up to 5MB each)</span>
//         </div>
//         <button className="upload-btn">Upload Photos</button>
//       </div>

//       {/* About */}
//       <h4 className="section-title">About You</h4>
//       <div className="form-group full">
//         <label>Description</label>
//         <textarea placeholder="Describe your catering business..." />
//       </div>

//       {/* Services */}
//       <h4 className="section-title">Services Offered</h4>

//       <div className="form-group full">
//         <input type="text" placeholder="List the services you provide..." />
//       </div>

//       {/* Selects */}
//       <div className="form-grid">
//         <div className="form-group">
//           <label>Cuisine Type</label>
//           <select>
//             <option>Select Cuisine Type</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Event Type</label>
//           <select>
//             <option>Select Event Types</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Select Price Range</label>
//           <select>
//             <option>Select Range</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Capacity</label>
//           <div className="capacity-row">
//             <input type="number" placeholder="Min" />
//             <input type="number" placeholder="Max" />
//           </div>
//         </div>
//       </div>

//       {/* Address */}
//       <h4 className="section-title">Address</h4>

//       <div className="form-grid">
//         <select>
//           <option>Country</option>
//         </select>
//         <select>
//           <option>State</option>
//         </select>
//         <select>
//           <option>City</option>
//         </select>
//         <input type="text" placeholder="PIN" />
//         <input className="full" type="text" placeholder="Address Line" />
//       </div>
//     </div>
//   );
// };

// export default RegisterCatererForm;
