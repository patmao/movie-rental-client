import React, { useState } from "react";
import { createRental } from "../api/api";
import { useNavigate, useLocation } from "react-router-dom";
import './Rental.css'; // Import the CSS file

function RentalCreate() {
    const location = useLocation();
    const { state } = location;
    const [movieId, setMovieId] = useState(state?.movieId || "");
    const [userEmail, setUserEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [pickupTime, setPickupTime] = useState("");
    const [movieTitle, setMovieTitle] = useState(state?.movieTitle || "");
    const [customerName, setCustomerName] = useState("");
    const [customerId, setCustomerId] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!movieTitle || !customerId || !customerName) {
            setMessage("Please fill out all fields.");
            return;
        }
        const rentalDto = { 
            MovieName: movieTitle, 
            userEmail, 
            CustomerID: customerId, 
            CustomerName: customerName, 
            amount, 
            pickupTime 
        };
        try {
            await createRental(movieId, userEmail, rentalDto);
            setMessage("Rental created successfully!");
        } catch (error) {
            setMessage("Error creating rental.");
            console.error(error);
        }
    };

    return (
        <div className="rental-container">
            <h2>Add Rental</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Movie ID" 
                    value={movieId} 
                    onChange={(e) => setMovieId(e.target.value)} 
                    required 
                    readOnly={!!state?.movieId} 
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
                <input 
                    type="text" 
                    placeholder="Movie Title" 
                    value={movieTitle} 
                    onChange={(e) => setMovieTitle(e.target.value)} 
                    required 
                    readOnly={!!state?.movieTitle} 
                />
                <input 
                    type="text" 
                    placeholder="Customer Name" 
                    value={customerName} 
                    onChange={(e) => setCustomerName(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Customer ID" 
                    value={customerId} 
                    onChange={(e) => setCustomerId(e.target.value)} 
                    required 
                />
                <button type="submit">Add Rental</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default RentalCreate;
