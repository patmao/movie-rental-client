import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRentals } from "../api/api";
import "./RentalList.css"; // Import the new CSS file

function RentalList() {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    const fetchRentals = async () => {
      const data = await getRentals();
      setRentals(data);
    };

    fetchRentals();
  }, []);

  return (
    <div className="rental-list-container">
      <h1 className="rental-list-title">Rental List</h1>
      <div className="rental-actions">
        <Link to="/rentals/create" className="create-rental-button">
          + Create New Rental
        </Link>
      </div>
      <ul className="rental-list">
        {rentals.map((rental) => (
          <li key={rental.rentalId} className="rental-item">
            <Link to={`/rentals/${rental.rentalId}`} className="rental-link">
              <div className="rental-info">
                <span className="rental-movie">{rental.movieName}</span>
                <span className="rental-customer">{rental.customerName}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RentalList;
