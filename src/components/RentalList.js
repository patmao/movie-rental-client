import React, { useEffect, useState } from 'react';
import { fetchRentals } from '../api/api';

const RentalList = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    const loadRentals = async () => {
      const { data } = await fetchRentals();
      setRentals(data);
    };
    loadRentals();
  }, []);

  return (
    <div>
      <h2>My Rentals</h2>
      <ul>
        {rentals.map((rental) => (
          <li key={rental.rentalId}>
            {rental.movieName} - Pick up: {rental.pickUpTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RentalList;