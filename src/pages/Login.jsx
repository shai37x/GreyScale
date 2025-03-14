import { useState } from "react";
import axios from "axios";
import "../components/css/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("client"); // Default to "client"

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:7001/userAuth/login";
    const data = { username: email, password: password };

    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.status === 200) {
        let user = response.data.data.user;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", user.role);

        console.log("User data:", user);
        console.log("User data stored:", localStorage.getItem("user"));

        alert("Login successful");

        if (user.role === 'admin') {
          navigate("/Admin");
        } else if (user.role === 'user') {
          navigate("/");
        } else {
          navigate("/");
        }
        window.location.reload(); // Refresh to clear state
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed: " + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        
        {/* Role Selector with Bottom Line Effect */}
        <div className="role-selector">
          <span 
            className={userType === "client" ? "active" : ""} 
            onClick={() => setUserType("client")}
          >
            Client
          </span>
          <span 
            className={userType === "creative" ? "active" : ""} 
            onClick={() => setUserType("creative")}
          >
            Photographer
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="lbutton" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
