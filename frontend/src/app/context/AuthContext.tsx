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
  hasToken: boolean;
  isLoading: boolean;
  login: (userData: User) => void;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [hasToken, setHasToken] = useState(false); //Token check
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkToken = () => {
      const cookies = document.cookie.split(';');
      const tokenExists = cookies.some(cookie => cookie.trim().startsWith('token='));
      setHasToken(tokenExists);
      setIsLoading(false);
    };

    checkToken();
  }, []);

  const login = (userData: User) => {
    if (userData) {
      setUser(userData);
      setHasToken(true);
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
      setHasToken(false);
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, hasToken, isLoading, login, logout }}>
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