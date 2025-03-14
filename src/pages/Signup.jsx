import React, { useState } from "react";
import "../components/css/Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    state: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const validCountries = ["India", "UAE"];
  const validStates = {
    India: ["Kerala"],
    UAE: ["Dubai", "Abu Dhabi", "Sharjah"],
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error message when user starts typing
  };

  const validateLocation = () => {
    const { country, state } = formData;
    if (!validCountries.includes(country) || !validStates[country]?.includes(state)) {
      setError("❌ Sorry, we are available only in Kerala (India) and UAE.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateLocation()) return;

    console.log("Registering user:", formData);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create an Account</h2>
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required></textarea>

          <select name="country" value={formData.country} onChange={handleChange} required>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="UAE">UAE</option>
          </select>

          <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="">Select State</option>
            {formData.country && validStates[formData.country] ? (
              validStates[formData.country].map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))
            ) : (
              <option disabled>Please select a country first</option>
            )}
          </select>

          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />

          <button type="submit">Register</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
