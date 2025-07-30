
import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'electric' | 'neon' | 'sunset' | 'ocean';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: { name: Theme; label: string; gradient: string }[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themes = [
  { name: 'electric' as Theme, label: 'Electric Blue', gradient: 'bg-gradient-electric' },
  { name: 'neon' as Theme, label: 'Neon Cyber', gradient: 'bg-gradient-neon' },
  { name: 'sunset' as Theme, label: 'Sunset Vibes', gradient: 'bg-gradient-sunset' },
  { name: 'ocean' as Theme, label: 'Ocean Depths', gradient: 'bg-gradient-ocean' },
];

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('electric');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};
