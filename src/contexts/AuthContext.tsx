
import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  showWelcomeMessage: boolean;
  setShowWelcomeMessage: (show: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  const login = (username: string, password: string): boolean => {
    if (username.trim() && password.trim()) {
      setIsAuthenticated(true);
      setShowWelcomeMessage(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setShowWelcomeMessage(false);
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      login, 
      logout, 
      showWelcomeMessage, 
      setShowWelcomeMessage 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
