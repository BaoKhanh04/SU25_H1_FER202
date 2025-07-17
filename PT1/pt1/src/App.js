import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Login from './components/Login';
import LaptopManager from './components/LaptopManager';
import LaptopDetail from './components/LaptopDetail';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import './styles.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Navigation user={user} onLogout={handleLogout} />
      <Container className="mt-4">
        <Routes>
          <Route path="/login" element={<Login setUser={handleLogin} />} />

          <Route
            path="/laptops"
            element={
              <ProtectedRoute user={user}>
                <LaptopManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="/laptops/:id"
            element={
              <ProtectedRoute user={user}>
                <LaptopDetail />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
