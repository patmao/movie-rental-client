import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById, rentMovie } from '../api/api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      const { data } = await fetchMovieById(id);
      setMovie(data);
    };
    loadMovie();
  }, [id]);

  const handleRent = async () => {
    await rentMovie(id, 1); // Rent 1 unit
    alert('Movie rented successfully!');
  };

  return movie ? (
    <div>
      <h2>{movie.movieName}</h2>
      <p>Price: ${movie.rentalPrice}</p>
      <p>Stock: {movie.stock}</p>
      <button onClick={handleRent}>Rent</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default MovieDetails;