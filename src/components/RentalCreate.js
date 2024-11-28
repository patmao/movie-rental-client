import React, { useState } from "react";
import { createRental } from "../api/api";
import { useNavigate } from "react-router-dom";

function RentalCreate() {
    const [movieId, setMovieId] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [amount, setAmount] = useState(""); // Amount field
    const [pickupTime, setPickupTime] = useState(""); // Pickup Time field
    const [movieTitle, setMovieTitle] = useState(""); // Movie Title
    const [customerName, setCustomerName] = useState(""); // Customer Name
    const [customerId, setCustomerId] = useState(""); // Customer ID
    const [message, setMessage] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      // Ensure movieTitle, customerId, and customerName are populated correctly
      if (!movieTitle || !customerId || !customerName) {
        setMessage("Please fill out all fields.");
        return;
      }
    
      // Log the values to verify
      console.log("Submitting rental with values:");
      console.log("Movie Name:", movieTitle);
      console.log("User Email:", userEmail);  
      console.log("Customer ID:", customerId);
      console.log("Customer Name:", customerName);
      console.log("Amount:", amount);
      console.log("Pickup Time:", pickupTime);
    
      // Create the RentalCreateDTO object with dynamic values
      const rentalDto = {
        MovieName: movieTitle,  // Ensure the movieTitle is set
        userEmail: userEmail,   // Ensure the userEmail is correctly populated
        CustomerID: customerId, // Ensure the customerId is set
        CustomerName: customerName, // Ensure the customerName is set
        amount: amount,
        pickupTime: pickupTime,
      };
    
      // Log the rentalDto to verify it's populated correctly
      console.log("Rental DTO:", rentalDto);
    
      try {
        await createRental(movieId, userEmail, rentalDto);
        setMessage("Rental created successfully!");
      } catch (error) {
        setMessage("Error creating rental.");
        console.error(error);
      }
    };
  
    return (
      <div>
        <h2>Add Rental</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Movie ID"
            value={movieId}
            onChange={(e) => setMovieId(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="User Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <input
            type="datetime-local"
            placeholder="Pickup Time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            required
          />
          {/* Input for Movie Title */}
          <input
            type="text"
            placeholder="Movie Title"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
            required
          />
          {/* Input for Customer Name */}
          <input
            type="text"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
          {/* Input for Customer ID */}
          <input
            type="text"
            placeholder="Customer ID"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            required
          />
          <button type="submit">Add Rental</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
}

export default RentalCreate;
