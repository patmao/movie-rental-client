// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send login credentials to the backend
      const response = await axios.post('https://localhost:7187/api/Auth/login', {
        email,
        password,
      });

      // Get the response message and IsAdmin status (correct casing)
      const { message, IsAdmin } = response.data;

      // Display appropriate alert based on user role
      alert(message);  // This will show either "Welcome Admin" or "Welcome User"

      // If needed, store the IsAdmin in localStorage or state
      localStorage.setItem('IsAdmin', IsAdmin);

      // Call setUser to update the user state in the parent component
      setUser({ email, IsAdmin });

      // Redirect to the dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
