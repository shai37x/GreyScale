import React, { useState, useEffect } from "react";
import "../components/css/Profile.css"; // Import your CSS file

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    fullname: "Athul Nair",
    email: "athul.nair@example.com",
    phone: "+91 9876543210",
    address: "12 MG Road, Kochi",
    country: "India",
    state: "Kerala",
  });

  useEffect(() => {
    // const savedUser = JSON.parse(localStorage.getItem("user"));
    // if (savedUser) {
    //   setUser(savedUser);
    // } else {
    //   localStorage.setItem("user", JSON.stringify(user)); // Store dummy data if not present
    // }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-card">
        <div className="profile-field">
          <label>Full Name:</label>
          {isEditing ? (
            <input type="text" name="fullname" value={user.fullname} onChange={handleChange} />
          ) : (
            <p>{user.fullname}</p>
          )}
        </div>

        <div className="profile-field">
          <label>Email:</label>
          {isEditing ? (
            <input type="email" name="email" value={user.email} onChange={handleChange} />
          ) : (
            <p>{user.email}</p>
          )}
        </div>

        <div className="profile-field">
          <label>Phone:</label>
          {isEditing ? (
            <input type="text" name="phone" value={user.phone} onChange={handleChange} />
          ) : (
            <p>{user.phone}</p>
          )}
        </div>

        <div className="profile-field">
          <label>Address:</label>
          {isEditing ? (
            <input type="text" name="address" value={user.address} onChange={handleChange} />
          ) : (
            <p>{user.address}</p>
          )}
        </div>

        <div className="profile-field">
          <label>Country:</label>
          {isEditing ? (
            <input type="text" name="country" value={user.country} onChange={handleChange} />
          ) : (
            <p>{user.country}</p>
          )}
        </div>

        <div className="profile-field">
          <label>State:  </label>
          {isEditing ? (
            <input type="text" name="state" value={user.state} onChange={handleChange} />
          ) : (
            <p>{user.state}</p>
          )}
        </div>

        <div className="profile-buttons">
          {isEditing ? (
            <button className="save-btn" onClick={handleSave}>Save</button>
          ) : (
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
