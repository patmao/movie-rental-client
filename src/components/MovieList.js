// src/components/MovieList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMovies, deleteMovie } from "../api/api";
import "./MovieList.css";

const MovieList = ({ showAdminActions }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const { data } = await fetchMovies();
      setMovies(data);
    };
    loadMovies();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteMovie(id);
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    } catch (err) {
      console.error("Failed to delete movie", err);
    }
  };

  return (
    <div className="movie-list">
      <h2 className="movie-list-title">Available Movies</h2>
      <ul className="movie-list-items">
        {movies.map((movie) => (
          <li className="movie-item" key={movie.id}>
            <Link className="movie-link" to={`/movie/${movie.id}`}>
              {movie.movieName} - ${movie.rentalPrice}
            </Link>
            {showAdminActions && (
              <div className="admin-actions">
                <Link className="update-link" to={`/update-movie/${movie.id}`}>
                  Update
                </Link>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(movie.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
