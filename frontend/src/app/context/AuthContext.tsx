'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getProfile, logoutUser } from '../system/api';

export type User = {
  _id: string;
  name: string;
  email: string;
} | null;

export type AuthContextType = {
  user: User;
  isLoading: boolean;
  login: (userData: User) => void;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Check if token exists in cookies
        const cookies = document.cookie.split(';');
        const hasToken = cookies.some(cookie => cookie.trim().startsWith('token='));

        if (!hasToken) {
          setIsLoading(false);
          return;
        }

        setIsLoading(true);
        const userData = await getProfile();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = (userData: User) => {
    if (userData) {
      setUser(userData);
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};