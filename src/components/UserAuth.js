import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/api";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import './UserAuth.css'; // Add this line to import the CSS

const UserAuth = () => {
  const { login: contextLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await login({ email, password });
      
      // Log the response to check its structure
      console.log("Login Response Data:", data);
    
      // Use optional chaining and provide fallback values
      const isAdmin = data.isAdmin || false;  // Ensure proper boolean
      const userEmail = data.email || '';     // Ensure proper string
      const userRentals = data.rentals || []; // Ensure proper array
    
      console.log("Processed Login Data:", { isAdmin, userEmail, userRentals });
  
      if (isAdmin) {
        alert('Welcome Admin');
        navigate('/admin-dashboard');
      } else {
        alert('Welcome User');
        navigate('/user-dashboard');
      }
    
      // Update AuthContext
      contextLogin({ email: userEmail, isAdmin, rentals: userRentals });
    } catch (err) {
      console.error('Login failed:', err);
      alert('Login failed. Please check your email or password.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input
        type="email"
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserAuth;
