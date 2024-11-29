import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Header.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Movie Rental</h1>
        <nav className="nav">
          <Link className="nav-link" to="/">
            Home
          </Link>
          {user && (
            <Link className="nav-link" to="/rentals">
              {user.isAdmin ? "Rent OUT" : "My Rentals"}
            </Link>
          )}
          {user ? (
            <button className="nav-button" onClick={logout}>
              Logout
            </button>
          ) : (
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
