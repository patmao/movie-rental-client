import axios from 'axios';

const API = axios.create({ baseURL: 'https://localhost:7187' });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Movie APIs
export const fetchMovies = () => API.get('/Movie');
export const fetchMovieById = (id) => API.get(`/Movie/${id}`);
export const addMovie = (movie) => API.post('/Movie', movie);
export const updateMovie = (id, updatedMovie) => API.put(`/Movie/${id}`, updatedMovie);
export const rentMovie = (id, amount) => API.patch(`/Movie/${id}/Rent`, { amount });
export const deleteMovie = (id) => API.delete(`/Movie/${id}`);

// Rental APIs
export const fetchRentals = () => API.get('/Rental');
export const createRental = (movieId, userEmail, rental) =>
  API.post(`/Rental/${movieId}/create`, rental, { params: { userEmail } });
export const deleteRental = (rental) => API.delete('/Rental', { data: rental });

// User APIs
export const login = (user) => API.post('/User/login', user);
export const register = (user) => API.post('/User/register', user);
