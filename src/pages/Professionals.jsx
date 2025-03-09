import React from "react";
import "../components/css/Professionals.css";

// ProfessionalCard Component
const ProfessionalCard = ({ professional }) => {
  return (
    <div className="professional-card">
      <div className="profile">
        <img src={professional.profilePic} alt="Profile" className="profile-pic" />
        <h3>{professional.name}</h3>
        <p>{professional.specialty}</p>
      </div>
      <div className="latest-photos">
        {professional.latestPhotos.map((photo, index) => (
          <img key={index} src={photo} alt={`Latest ${index}`} className="latest-photo" />
        ))}
      </div>
    </div>
  );
};

// Professionals Page
const Professionals = () => {
  // Dummy Data
  const highestLikedPhotos = [
    { src: "/images/camera.jpeg", professional: "John Doe", likes: 500 },
    { src: "/images/camera.jpeg", professional: "Jane Smith", likes: 480 },
    { src: "/images/camera.jpeg", professional: "Mike Johnson", likes: 450 },
    { src: "/images/camera.jpeg", professional: "Emily Davis", likes: 420 },
    { src: "/images/camera.jpeg", professional: "Robert Brown", likes: 400 },
    { src: "/images/camera.jpeg", professional: "Sarah Wilson", likes: 380 },
  ];

  const professionals = [
    {
      name: "John Doe",
      specialty: "Wedding Photography",
      profilePic: "/images/profilepic.jpeg",
      latestPhotos: ["/images/camera.jpeg", "/images/camera.jpeg", "/images/camera.jpeg", "/images/camera.jpeg"],
    },
    {
      name: "Jane Smith",
      specialty: "Event Photography",
      profilePic: "/images/profilepic.jpeg",
      latestPhotos: ["/images/camera.jpeg", "/images/camera.jpeg", "/images/camera.jpeg", "/images/camera.jpeg"],
    },
    {
      name: "Mike Johnson",
      specialty: "Portrait Photography",
      profilePic: "/images/profilepic.jpeg",
      latestPhotos: ["/images/camera.jpeg", "/images/camera.jpeg", "/images/camera.jpeg", "/images/camera.jpeg"],
    },
    {
      name: "Emily Davis",
      specialty: "Fashion Photography",
      profilePic: "/images/profilepic.jpeg",
      latestPhotos: ["/images/camera.jpeg", "/images/camera.jpeg", "/images/camera.jpeg", "/images/camera.jpeg"],
    },
    {
      name: "Robert Brown",
      specialty: "Nature Photography",
      profilePic: "/images/profilepic.jpeg",
      latestPhotos: ["/images/camera.jpeg", "/images/camera.jpeg", "/images/camera.jpeg", "/images/camera.jpeg"],
    },
  ];

  return (
    <div className="professionals-page">
      <h2>Highest Liked Photos</h2>
      <div className="highest-liked">
        {highestLikedPhotos.map((photo, index) => (
          <div key={index} className="liked-photo-card">
            <img src={photo.src} alt={`Liked ${index}`} className="liked-photo" />
            <div className="overlay">
              <p>{photo.professional} - {photo.likes} Likes</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Meet Our Professionals</h2>
      <div className="professional-cards">
        {professionals.map((pro, index) => (
          <ProfessionalCard key={index} professional={pro} />
        ))}
      </div>
    </div>
  );
};

export default Professionals;
