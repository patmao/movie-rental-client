// src/components/MovieList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies, deleteMovie } from '../api/api';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  // Fetch movies when component mounts
  useEffect(() => {
    const loadMovies = async () => {
      const { data } = await fetchMovies();
      setMovies(data);
    };
    loadMovies();
  }, []);

  // Handle movie deletion
  const handleDelete = async (id) => {
    try {
      await deleteMovie(id);  // Call the deleteMovie API function
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));  // Remove the deleted movie from the list
    } catch (err) {
      console.error('Failed to delete movie', err);
    }
  };

  return (
    <div>
      <h2>Available Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              {movie.movieName} - ${movie.rentalPrice}
            </Link>
            {' | '}
            <Link to={`/update-movie/${movie.id}`}>Update</Link>
            {' | '}
            <button onClick={() => handleDelete(movie.id)}>Delete</button> {/* Add delete button */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
