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
      console.log(data);

      // Show an appropriate message based on the user role
      alert(data.isAdmin ? "Welcome Admin" : "Welcome User");

      // Store the user data in context (global state)
      contextLogin(data);

      // Redirect to the dashboard page
      navigate("/dashboard");
    } catch (err) {
      // Show an error message if the login fails
      console.error("Login failed:", err);
      alert("Login failed. Please check your email or password.");
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
