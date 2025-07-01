import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [authData, setAuthData] = useState(null);
  const navigate = useNavigate();

  // Load auth data from auth.json
  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const response = await fetch('/auth.json');
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
      }
    };

    loadAuthData();
  }, []);

  const login = (username, password) => {
    return new Promise((resolve) => {
      if (!authData) {
        resolve(false);
        return;
      }

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
        resolve(true);
      } else {
        resolve(false);
      }
    });
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setCurrentUser(null);
    navigate('/login');
  };

  const value = {
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
