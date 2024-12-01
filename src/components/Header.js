import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Header.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext); // Access user from context
  const navigate = useNavigate(); // Initialize navigate

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Movie Rental</h1>
        <nav className="nav">
          <Link className="nav-link" to="/">
            Home
          </Link>
          {user && user.email && ( // Check if the user is logged in by verifying email
            <>
              {user.isAdmin && ( // Show Admin Dashboard link only for admins
                <Link className="nav-link" to="/admin-dashboard">
                  Admin Dashboard
                </Link>
              )}
              <Link className="nav-link" to="/rentals">
                {user.isAdmin ? "Rental List" : "My Rentals"}
              </Link>
              <button className="nav-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
          {!user.email && (
            <>
              <Link className="nav-link" to="/auth">
                Login
              </Link>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
