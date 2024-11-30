import React from 'react';
import './AdminDashboard.css'; // Add this line to import the CSS file
import MovieList from './MovieList';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AdminDashboard = () => {
  const navigate = useNavigate();  // Initialize the navigate hook

  // Function to handle redirect to Add Movie page
  const handleAddMovie = () => {
    navigate('/add-movie');  // Navigate to the Add Movie form
  };

  return (
    <div className="admin-dashboard">
      <h1>Welcome Admin</h1>
      <div className="movie-list">
        <MovieList showAdminActions={true} />
      </div>
      <button onClick={handleAddMovie}>Add Movie</button>  {/* Use onClick to trigger the redirect */}
      <h2>Your Rentals</h2>
    </div>
  );
};

export default AdminDashboard;
