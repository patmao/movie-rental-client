// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import RentalList from './components/RentalList';
import UserAuth from './components/UserAuth';
import AddMovie from './components/AddMovie';
import Dashboard from './components/Dashboard';
import Register from './components/Register'; // Import Register component
import UpdateMovie from './components/UpdateMovie'; // Import UpdateMovie component

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/rentals" element={<RentalList />} />
        <Route path="/auth" element={<UserAuth />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update-movie/:movieId" element={<UpdateMovie />} /> {/* Add route for updating a movie */}
      </Routes>
    </Router>
  );
};

export default App;
