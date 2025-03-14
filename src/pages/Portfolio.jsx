import React from "react";
import "../components/css/Portfolio.css"; // Import the CSS file
import dummyProfile from "../components/Ddata.json"; 

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {dummyProfile.map((profile) => (
        <div key={profile.id} className="profile-card">
          <img src={profile.profilePic} alt={profile.name} className="profile-pic" />
          <div className="profile-info">
            <h2>{profile.name}</h2>
            <p>{profile.bio}</p>
          </div>
          <div className="photo-gallery">
            {profile.photos.map((photo, index) => (
              <img key={index} src={photo} alt="Portfolio" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
