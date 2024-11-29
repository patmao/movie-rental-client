import axios from 'axios';

// Single Axios instance for all APIs
const API = axios.create({ baseURL: 'https://localhost:7187' });

// Movie APIs
export const fetchMovies = () => API.get('/Movie');
export const fetchMovieById = (id) => API.get(`/Movie/${id}`);
export const addMovie = (movie) => API.post('/Movie', movie);
export const updateMovie = (id, updatedMovie) => API.put(`/Movie/${id}`, updatedMovie);
export const rentMovie = (id, amount) => API.patch(`/Movie/${id}/Rent`, { amount });
export const deleteMovie = (id) => API.delete(`/Movie/${id}`);

// Rental APIs
export const getRentals = async () => {
  const response = await API.get('/Rental');
  console.log('Rentals API Response:', response.data); // Debugging
  return response.data;
};

export const getRentalById = async (id) => {
  const response = await API.get(`/Rental/${id}`);
  return response.data;
};

export const createRental = async (movieId, userEmail, rentalData) => {
  const response = await API.post(
    `/Rental/${movieId}/create?userEmail=${userEmail}`,
    rentalData
  );
  return response.data;
};

export const updateRental = async (id, rentalData) => {
  const response = await API.put(`/Rental/${id}`, rentalData);
  return response.data;
};

export const deleteRental = async (rentalId, userEmail) => {
  const response = await API.delete('/Rental', {
    data: { RentalID: rentalId, UserEmail: userEmail },
  });
  return response.data;
};

// User APIs
export const login = (user) => API.post('/User/login', user);
export const register = (user) => API.post('/User/register', user);
