import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRentalById, deleteRental } from "../api/api";
import "./Rental.css"; // Import the CSS file

function RentalDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rental, setRental] = useState(null);

  useEffect(() => {
    const fetchRental = async () => {
      const data = await getRentalById(id);
      console.log("Fetched Rental Data:", data); // Add this log
      setRental(data);
    };
    fetchRental();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this rental?")) {
      console.log(
        "Deleting rental with ID:",
        rental.rentalId,
        "and Email:",
        rental.customerEmail
      );
      try {
        await deleteRental(
          rental.rentalId,
          JSON.parse(localStorage.getItem("user"))?.email
        );
        navigate("/rentals");
      } catch (error) {
        console.error(
          "Delete Rental Error:",
          error.response?.data || error.message
        );
        alert("Failed to delete the rental. Please try again.");
      }
    }
  };

  if (!rental) return <p className="loading-message">Loading...</p>;

  return (
    <div className="rental-container rental-details">
      <h1>Rental Details</h1>
      <p>Movie: {rental.movieName}</p>
      <p>Customer: {rental.customerName}</p>
      <p>Pick-Up Time: {rental.pickUpTime}</p>
      <div className="button-group">
        <button onClick={() => navigate(`/rentals/${id}/update`)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default RentalDetails;
