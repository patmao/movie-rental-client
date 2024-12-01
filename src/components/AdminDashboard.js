import React, { useContext } from 'react';
import './AdminDashboard.css'; // Add this line to import the CSS file
import MovieList from './MovieList';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { AuthContext } from '../context/AuthContext'; // Import AuthContext

const AdminDashboard = () => {
  const { user } = useContext(AuthContext); // Access user data
  const navigate = useNavigate();  // Initialize the navigate hook

  // Function to handle redirect to Add Movie page
  const handleAddMovie = () => {
    navigate('/add-movie');  // Navigate to the Add Movie form
  };

  return (
    <div className="admin-dashboard">
      <h1>Welcome Admin</h1>
      <div className="movie-list">
        <MovieList showAdminActions={user?.isAdmin} /> {/* Dynamically set prop */}
      </div>
      <button onClick={handleAddMovie}>Add Movie</button>  {/* Use onClick to trigger the redirect */}  
    </div>
  );
};

export default AdminDashboard;
