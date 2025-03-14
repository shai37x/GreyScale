import React, { useState } from "react";
import "../components/css/Professionals.css";
import dummyProfile from "../components/Ddata.json"; // Import JSON data

// ProfessionalCard Component
const ProfessionalCard = ({ professional, onImageClick }) => {
  return (
    <div className="professional-card">
      <div className="profile">
        <img 
          src={professional.profilePic} 
          alt="Profile" 
          className="profile-pic"
          onClick={() => onImageClick(professional.profilePic)}
        />
        <h3>{professional.name}</h3>
        <p>{professional.bio}</p>
      </div>
      <div className="latest-photos">
        {professional.photos.map((photo, index) => (
          <img 
            key={index} 
            src={photo} 
            alt={`Latest ${index}`} 
            className="latest-photo" 
            onClick={() => onImageClick(photo)}
          />
        ))}
      </div>
    </div>
  );
};

// Professionals Page
const Professionals = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closePreview = () => {
    setSelectedImage(null);
  };

  return (
    <div className="professionals-page">
      <h2>Meet Our Professionals</h2>
      <div className="professional-cards">
        {dummyProfile.map((pro, index) => (
          <ProfessionalCard key={index} professional={pro} onImageClick={handleImageClick} />
        ))}
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="image-preview-overlay" onClick={closePreview}>
          <div className="image-preview">
            <img src={selectedImage} alt="Preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Professionals;
