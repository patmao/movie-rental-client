import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRentals } from "../api/api";

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
    <div>
      <h1>Rentals</h1>
      <Link to="/rentals/create">Create New Rental</Link>
      <ul>
        {rentals.map((rental) => (
          <li key={rental.rentalId}>
            <Link to={`/rentals/${rental.rentalId}`}>
              {rental.movieName} - {rental.customerName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RentalList;
