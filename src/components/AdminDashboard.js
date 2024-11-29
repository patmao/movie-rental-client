import React from 'react';
import './AdminDashboard.css'; // Add this line to import the CSS file
import MovieList from './MovieList';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Welcome Admin</h1>
      <div className="movie-list">
        <MovieList showAdminActions={true} />
      </div>
      <button>Add Movie</button>
      <h2>Your Rentals</h2>
      <button>Update Pickup Time</button>
    </div>
  );
};

export default AdminDashboard;
