import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { PrivateRoute } from './components/PrivateRoute';
import { Home } from './pages/Home';
import { Library } from './pages/Library';
import { Explore } from './pages/Explore';
import { Pomodoro } from './pages/Pomodoro';
import { Integrations } from './pages/Integrations';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';
import { useTheme } from './theme/useTheme';

import { BackgroundGraphs } from './components/BackgroundGraphs';

export const App: React.FC = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem('kudex-theme') || 'tokyo-night';
    setTheme(savedTheme as any);
  }, [setTheme]);

  return (
    <>
      <BackgroundGraphs />
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute><AppLayout /></PrivateRoute>}>
        <Route index element={<Home />} />
        <Route path="library" element={<Library />} />
        <Route path="explore" element={<Explore />} />
        <Route path="pomodoro" element={<Pomodoro />} />
        <Route path="settings" element={<Settings />} />
        <Route path="integrations" element={<Integrations />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  );
};
