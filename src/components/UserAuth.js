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
      const isAdmin = data.IsAdmin.bool;
      const userEmail = data.Email.S;
      const userRentals = data.Rentals.L;

      if (isAdmin) {
        alert('Welcome Admin');
        navigate('/admin-dashboard');
      } else {
        alert('Welcome User');
        navigate('/user-dashboard');
      }

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
