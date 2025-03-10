import React, { useState, useEffect } from "react";
import { Link, useNavigate , useLocation} from "react-router-dom";
import "./css/Navbar.css"; // Import CSS file

const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if the user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  // Navigation Functions
  function goHome() {
    navigate("/");
  }

  function goLogin() {
    navigate("/Login");
  }

  function goSignup() {
    navigate("/Signup");
  }

  function goBooking() {
    navigate("/Booking");
  }
  
  function goProfessionals() {
    navigate("/Professionals")
  }

  function handleLogout() {
    localStorage.removeItem("isLoggedIn"); // Remove login flag
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home after logout
    window.location.reload(); // Refresh the page
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="30"
            fill="currentColor"
            className="bi bi-camera2"
            viewBox="0 0 16 16"
          >
            <path d="M5 8c0-1.657 2.343-3 4-3V4a4 4 0 0 0-4 4" />
            <path d="M12.318 3h2.015C15.253 3 16 3.746 16 4.667v6.666c0 .92-.746 1.667-1.667 1.667h-2.015A5.97 5.97 0 0 1 9 14a5.97 5.97 0 0 1-3.318-1H1.667C.747 13 0 12.254 0 11.333V4.667C0 3.747.746 3 1.667 3H2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h.682A5.97 5.97 0 0 1 9 2c1.227 0 2.367.368 3.318 1M2 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M14 8A5 5 0 1 0 4 8a5 5 0 0 0 10 0" />
          </svg>
          Greyscale
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a onClick={goHome} 
              className={`nav-link ${location.pathname==="/"?"active":""}`} 
              aria-current="page" h
              href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a onClick={goProfessionals} 
              className={`nav-link ${location.pathname==="/Professionals"?"active":""}`}
              href="#">
                Professionals</a>
            </li>

            {/* Show Bookings only when logged in */}
            {isLoggedIn && (
              <li className="nav-item">
                <a onClick={goBooking} 
                className={`nav-link ${location.pathname==='/Booking'?"active":"" }`} 
                href="#">
                  Booking
                </a>
              </li>
            )}
          </ul>

          {/* Show Login & Signup when not logged in */}
          {!isLoggedIn ? (
            <div className="d-flex ms-auto text-end"> 
              <button onClick={goLogin} type="button" className="btn btn-outline-primary me-2">
                Login
              </button>
              <button onClick={goSignup} type="button" className="btn btn-dark">
                Signup
              </button>
            </div>
          ) : (
            // Show Logout when logged in
            <div className="ms-auto text-end">
              <button onClick={handleLogout} type="button" className="btn btn-dark">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
