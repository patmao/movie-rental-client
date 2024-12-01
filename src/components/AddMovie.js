import React, { useState } from 'react';
import { addMovie } from '../api/api';
import './AddMovie.css'; // Import the CSS file
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const [movieName, setMovieName] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');
  const [stock, setStock] = useState('');
  const navigate = useNavigate();

  const handleAdd = async () => {
    await addMovie({ movieName, rentalPrice, stock });
    alert('Movie added successfully!');
    navigate("/")
  };

  return (
    <div className="add-movie-container">
      <div className="form-container">
        <h2 className="form-title">Add New Movie</h2>
        <div className="form-group">
          <label htmlFor="movieName">Movie Name</label>
          <input
            id="movieName"
            type="text"
            placeholder="Enter movie name"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rentalPrice">Rental Price</label>
          <input
            id="rentalPrice"
            type="number"
            placeholder="Enter rental price"
            value={rentalPrice}
            onChange={(e) => setRentalPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            id="stock"
            type="number"
            placeholder="Enter stock quantity"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>
        <button className="add-movie-button" onClick={handleAdd}>Add Movie</button>
      </div>
    </div>
  );
};

export default AddMovie;
