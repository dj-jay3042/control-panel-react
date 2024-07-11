import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../../utils/Request';

const PrivateRoute = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};

export default PrivateRoute;
