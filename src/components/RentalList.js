import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getRentals } from "../api/api"; // Assuming this API call gets all rentals
import { AuthContext } from "../context/AuthContext";
import "./RentalList.css";

function RentalList() {
  const { user } = useContext(AuthContext); // Access the logged-in user's data
  const [rentals, setRentals] = useState([]);  // State for storing rentals

  useEffect(() => {
    const fetchRentals = async () => {
      const data = await getRentals();  // Fetch all rentals from the API

      if (user && user.isAdmin) {
        // If the user is an admin, show all rentals
        setRentals(data);
      } else if (user && user.rentals) {
        // If it's a regular user, show only their rentals
        const filteredRentals = data.filter((rental) =>
          user.rentals.includes(rental.rentalId)  // Match rentalId to the user's rentals
        );
        setRentals(filteredRentals);
      }
    };

    fetchRentals();
  }, [user]); // Re-run the effect when the user changes

  return (
    <div className="rental-list-container">
      <h1 className="rental-list-title">{user && user.isAdmin ? "All Rentals" : "My Rentals"}</h1>
      
      <ul className="rental-list">
        {rentals.length === 0 ? (
          <li>No rentals found.</li>  // Show message if no rentals
        ) : (
          rentals.map((rental) => (
            <li key={rental.rentalId} className="rental-item">
              <Link to={`/rentals/${rental.rentalId}`} className="rental-link">
                <div className="rental-info">
                  <span className="rental-movie">{rental.movieName}</span>
                  <span className="rental-customer">{rental.customerName}</span>
                </div>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default RentalList;
