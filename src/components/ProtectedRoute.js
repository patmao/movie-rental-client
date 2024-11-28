import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, adminOnly }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/auth" />; // Redirect to login if not logged in
  }

  if (adminOnly && !user.isAdmin) {
    return <Navigate to="/user-dashboard" />; // Redirect non-admin users to UserDashboard
  }

  return children; // Render the requested component
};

export default ProtectedRoute;
