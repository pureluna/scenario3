import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext, type AuthContextType } from '../contexts/AuthContext'; // Corrected import path

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { token } = useContext(AuthContext) as AuthContextType;
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};