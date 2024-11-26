import React, { useState } from 'react';
import { addMovie } from '../api/api';

const AddMovie = () => {
  const [movieName, setMovieName] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');
  const [stock, setStock] = useState('');

  const handleAdd = async () => {
    await addMovie({ movieName, rentalPrice, stock });
    alert('Movie added successfully!');
  };

  return (
    <div>
      <h2>Add New Movie</h2>
      <input
        type="text"
        placeholder="Movie Name"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rental Price"
        value={rentalPrice}
        onChange={(e) => setRentalPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <button onClick={handleAdd}>Add Movie</button>
    </div>
  );
};

export default AddMovie;