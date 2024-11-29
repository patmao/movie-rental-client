import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../api/api'; // Removed unused import rentMovie
import { Link } from "react-router-dom";
import './MovieDetails.css'; // Import the CSS file

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      const { data } = await fetchMovieById(id);
      console.log("Fetched movie:", data); // Debug log
      setMovie(data);
    };
    loadMovie();
  }, [id]);

  return movie ? (
    <div className="movie-details-container">
      <h2>{movie.movieName}</h2>
      <p>Price: ${movie.rentalPrice}</p>
      <p>Stock: {movie.stock}</p>
      <Link
        to={`/rentals/create`}
        state={{ movieId: movie.id, movieTitle: movie.movieName }}
        onClick={() =>
          console.log("Navigating with state:", {
            movieId: movie.movieId,
            movieTitle: movie.movieName,
          })
        }
      >
        Want to Rent?
      </Link>
    </div>
  ) : (
    <p className="loading-message">Loading...</p>
  );
};

export default MovieDetails;
