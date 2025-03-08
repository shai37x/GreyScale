import { useState } from "react";
import axios from "axios";
import "../components/css/Login.css"
import {useNavigate} from "react-router-dom"; 



const Login = () => {
  const navigetor=useNavigate();
  const [email, setEmail] = useState(""); // No validation issue
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("client");

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const url = "http://localhost:7001/userAuth/login";
    const data = { username: email, password: password }; // Ensure correct field names

    try {
      const response = await axios.post(url, data, {
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json', 
        }
      });

      if (response.status === 200) {
        let user = response.data.data.user;
        localStorage.setItem('user', JSON.stringify(user));

        alert("Login successful");

        // if (user.role === "admin") {
        //   localStorage.setItem('role', 'admin');
        //   // navigate("/AdminPage");
        // } else if (user.role === 'staff') {
        //   localStorage.setItem('role', 'staff');
        //   // navigate('/StaffPage');
        // } else {
         navigetor("/");
        // }
      }
    
    } catch (error) {
      alert("Login failed: " + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <div className="role-selector">
          <button
            className={userType === "client" ? "active" : ""}
            onClick={() => setUserType("client")}
          >
            Client
          </button>
          <button
            className={userType === "creative" ? "active" : ""}
            onClick={() => setUserType("creative")}
          >
            Creative Professional
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text" // Changed from email to text (prevents browser validation)
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text" // Changed from password to text to disable validation
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
