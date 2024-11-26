// src/components/UpdateMovie.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchMovieById, updateMovie } from '../api/api';  // Use the correct API function

const UpdateMovie = () => {
  const [movie, setMovie] = useState({
    movieName: '',
    rentalPrice: '',
    stock: '',
  });
  const [error, setError] = useState('');
  const { movieId } = useParams();  // Get movie ID from URL params
  const navigate = useNavigate();

  // Fetch movie details when component mounts
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetchMovieById(movieId);  // Use fetchMovieById to get movie data
        setMovie(response.data);  // Assuming the API returns movie details in response.data
      } catch (err) {
        setError('Failed to load movie details');
      }
    };

    fetchMovie();
  }, [movieId]);

  // Handle form submission for updating the movie
  const handleUpdateMovie = async (e) => {
    e.preventDefault();
    try {
      // Only update movieName, rentalPrice, and stock
      const updatedMovie = {
        movieName: movie.movieName,
        rentalPrice: movie.rentalPrice,
        stock: movie.stock,
      };
      await updateMovie(movieId, updatedMovie);  // Call the updateMovie API function
      navigate('/');  // Redirect to the movie list after successful update
    } catch (err) {
      setError('Failed to update movie. Please try again.');
    }
  };

  return (
    <div>
      <h2>Update Movie</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleUpdateMovie}>
        <input
          type="text"
          placeholder="Movie Name"
          value={movie.movieName}
          onChange={(e) => setMovie({ ...movie, movieName: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rental Price"
          value={movie.rentalPrice}
          onChange={(e) => setMovie({ ...movie, rentalPrice: e.target.value })}
        />
        <input
          type="number"
          placeholder="Stock"
          value={movie.stock}
          onChange={(e) => setMovie({ ...movie, stock: e.target.value })}
        />
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
