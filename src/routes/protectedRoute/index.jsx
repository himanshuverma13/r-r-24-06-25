import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../utils/UseContext/useContext';

const ProtectedRoute = ({ children }) => {
  const { AuthLocal } = useContext(UserContext);
  const isAuthenticated = JSON?.parse(localStorage.getItem('Auth') ?? "{}"); // or use Redux/store

  if (!AuthLocal?.mode || !isAuthenticated?.mode) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
