// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import RentalList from './components/RentalList';
import RentalDetails from "./components/RentalDetails";
import RentalCreate from "./components/RentalCreate";
import RentalUpdate from "./components/RentalUpdate";
import UserAuth from './components/UserAuth';
import AddMovie from './components/AddMovie';
import Register from './components/Register'; // Import Register component
import UpdateMovie from './components/UpdateMovie'; // Import UpdateMovie component
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/rentals" element={<RentalList />} />
        <Route path="/rentals/:id" element={<RentalDetails />} />
        <Route path="/rentals/create" element={<RentalCreate />} />
        <Route path="/rentals/:id/update" element={<RentalUpdate />} />
        <Route path="/auth" element={<UserAuth />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/update-movie/:movieId" element={<UpdateMovie />} /> {/* Add route for updating a movie */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute adminOnly={false}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
};

export default App;
