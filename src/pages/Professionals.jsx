import React, { useState } from "react";
import "../components/css/Professionals.css";
import dummyProfile from "../components/Ddata.json"; // Import JSON data

// ProfessionalCard Component
const ProfessionalCard = ({ professional, onImageClick, onAddClick }) => {
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
      <button className="add-button" onClick={() => onAddClick(professional)}>
        Add
      </button>
    </div>
  );
};

// Professionals Page
const Professionals = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [comment, setComment] = useState("");
  const [isComplaint, setIsComplaint] = useState(false);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setComment(""); // Reset comment field when new image is selected
    setIsComplaint(false); // Reset checkbox
  };

  const closePreview = () => {
    setSelectedImage(null);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() === "") {
      alert("Please enter a comment before submitting.");
      return;
    }
    const complaintText = isComplaint ? "This is a complaint." : "This is general feedback.";
    alert(`Comment Submitted:\n${comment}\n${complaintText}`);
    setComment("");
    setIsComplaint(false);
    setSelectedImage(null); // Close the preview after submission
  };

  const handleAddClick = (professional) => {
    alert(`${professional.name} has been added for booking!`);
  };

  return (
    <div className="professionals-page">
      <h2 className="meet-our">Meet Our Professionals</h2>
      <div className="professional-cards">
        {dummyProfile.map((pro, index) => (
          <ProfessionalCard 
            key={index} 
            professional={pro} 
            onImageClick={handleImageClick} 
            onAddClick={handleAddClick} 
          />
        ))}
      </div>

      {/* Image Preview Modal with Comment Section */}
      {selectedImage && (
        <div className="image-preview-overlay" onClick={closePreview}>
          <div className="image-preview" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            <img src={selectedImage} alt="Preview" />

            {/* Comment Section (Right Side) */}
            <div className="comment-section">
              <textarea
                className="comment-box"
                placeholder="Write your comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <div className="complaint-checkbox">
                <input
                  type="checkbox"
                  id="complaint"
                  checked={isComplaint}
                  onChange={() => setIsComplaint(!isComplaint)}
                />
                <label htmlFor="complaint">This is a complaint</label>
              </div>
              <button className="submit-comment" onClick={handleCommentSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Professionals;
