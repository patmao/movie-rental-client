import React from 'react';
import './UserDashboard.css'; // Add this line to import the CSS file
import MovieList from './MovieList';
import RentalList from './RentalList';

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <h1>Welcome to the Movie Rental System</h1>
      <div className="movie-list">
        <MovieList showAdminActions={false} />
      </div>
      <div className="rental-list">
        <RentalList />
      </div>
    </div>
  );
};

export default UserDashboard;
