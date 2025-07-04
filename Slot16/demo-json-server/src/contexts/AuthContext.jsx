import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [authData, setAuthData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Load auth data from auth.json
  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const response = await fetch('/auth.json');
        if (!response.ok) {
          throw new Error('Failed to load authentication data');
        }
        const data = await response.json();
        setAuthData(data);
        
        // Check if user is logged in on initial load
        const savedUser = JSON.parse(localStorage.getItem('auth'));
        if (savedUser) {
          // Verify the saved user still exists in auth data
          const userExists = data.users.some(u => u.username === savedUser.username);
          if (userExists) {
            setCurrentUser(savedUser);
          } else {
            localStorage.removeItem('auth');
          }
        }
      } catch (error) {
        console.error('Error loading auth data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAuthData();
  }, []);

  const login = async (username, password) => {
    if (!authData) {
      throw new Error('Authentication data not loaded');
    }

    try {
      // Find user in auth data
      const user = authData.users.find(
        u => u.username === username && u.password === password
      );

      if (user) {
        const userData = {
          id: user.id,
          username: user.username,
        };
        
        localStorage.setItem('auth', JSON.stringify(userData));
        setCurrentUser(userData);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setCurrentUser(null);
    navigate('/login', { replace: true });
  };

  const value = {
    currentUser,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
