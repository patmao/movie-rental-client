import React from 'react';
import MovieList from './MovieList';
import RentalList from './RentalList';

const UserDashboard = () => {
  return (
    <div>
      <h1>Welcome to the Movie Rental System</h1>
      <MovieList showAdminActions={false} />
      <RentalList />
    </div>
  );
};

export default UserDashboard;
