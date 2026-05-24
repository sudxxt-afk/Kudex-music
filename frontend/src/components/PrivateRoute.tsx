import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  // Проверяем наличие токена (в реальном приложении может быть проверка валидности или запрос к /me)
  const isAuthenticated = !!localStorage.getItem('kudex_access_token');
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};
