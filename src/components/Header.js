// src/components/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header>
      <h1>Movie Rental</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/rentals">My Rentals</Link>
        {user ? (
          <>
            <button onClick={logout}>Logout</button>
            <Link to="/add-movie">Add Movie</Link>
          </>
        ) : (
          <>
            <Link to="/auth">Login</Link>
            <Link to="/register">Register</Link> {/* Add register link */}
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
