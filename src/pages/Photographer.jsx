import React, { useState } from "react";
import dummyData from "../components/Ddata.json"; // ✅ Import JSON
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa"; // ✅ Icons
import "../components/css/Photographer.css"; // ✅ Import CSS

const Photographer = () => {
  const [photographer, setPhotographer] = useState(dummyData[0]);

  // Handle profile updates
  const handleInputChange = (e) => {
    setPhotographer({ ...photographer, [e.target.name]: e.target.value });
  };

  // Update profile picture
  const handleProfilePicChange = (e) => {
    setPhotographer({ ...photographer, profilePic: e.target.value });
  };

  // Add new photo
  const addPhoto = () => {
    const newPhoto = prompt("Enter new photo URL:");
    if (newPhoto) {
      setPhotographer({ ...photographer, photos: [...photographer.photos, newPhoto] });
    }
  };

  // Delete photo
  const deletePhoto = (index) => {
    const updatedPhotos = photographer.photos.filter((_, i) => i !== index);
    setPhotographer({ ...photographer, photos: updatedPhotos });
  };

  return (
    <div className="photographer-container">
      <h2 className="title">Photographer Profile</h2>

      {/* Profile Section */}
      <div className="profile-section">
        <img src={photographer.profilePic} alt={photographer.name} className="profile-pic" />
        <input
          type="text"
          placeholder="Profile picture URL"
          value={photographer.profilePic}
          onChange={handleProfilePicChange}
          className="input-field"
        />
      </div>

      {/* Profile Details */}
      <div className="info-section">
        <label>Name:</label>
        <input type="text" name="name" value={photographer.name} onChange={handleInputChange} className="input-field" />

        <label>Bio:</label>
        <textarea name="bio" value={photographer.bio} onChange={handleInputChange} className="input-field"></textarea>

        <label>Location:</label>
        <input type="text" name="location" value={photographer.location} onChange={handleInputChange} className="input-field" />
      </div>

      {/* Portfolio Section */}
      <div className="portfolio-section">
        <h3>Portfolio Photos</h3>
        <button className="btn add-photo-btn" onClick={addPhoto}>
          <FaPlus /> Add Photo
        </button>

        <div className="photo-grid">
          {photographer.photos.map((photo, index) => (
            <div key={index} className="photo-card">
              <img src={photo} alt="Portfolio" className="photo-img" />
              <button className="delete-btn" onClick={() => deletePhoto(index)}>
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photographer;
