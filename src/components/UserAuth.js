import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/api";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const UserAuth = () => {
  const { login: contextLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async () => {
    try {
      // Call the backend login function with user credentials
      const { data } = await login({ email, password });
  
      // Log the full response for debugging
      console.log('Raw Response from DynamoDB:', data);
  
      // Normalize fields to extract actual values
      const isAdmin = data.IsAdmin.bool; // Extract the boolean value for IsAdmin
      const userEmail = data.Email.S; // If it's stored as a string
      const userRentals = data.Rentals.L; // If it's stored as a list
  
      // Check if the user is an admin and display the appropriate message
      if (isAdmin) {
        alert('Welcome Admin');
        navigate('/admin-dashboard');
      } else {
        alert('Welcome User');
        navigate('/user-dashboard');
      }
  
      // Pass the normalized data to the context for global use
      contextLogin({ email: userEmail, isAdmin, rentals: userRentals });
  
 
    } catch (err) {
      console.error('Login failed:', err);
      alert('Login failed. Please check your email or password.');
    }
  };

  return (
    <div>
      <h2>Login / Register</h2>
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
