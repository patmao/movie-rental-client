// src/components/AdminDashboard.js
import React from 'react';
import MovieList from './MovieList';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Welcome Admin</h1>
      <MovieList showAdminActions={true} /> {/* Pass true to show admin actions */}
      <button>Add Movie</button>
      <h2>Your Rentals</h2>
      <button>Update Pickup Time</button>
    </div>
  );
};

export default AdminDashboard;
