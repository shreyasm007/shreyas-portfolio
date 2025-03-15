// src/context/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Default to dark mode initially
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Retrieve stored theme preference
    const storedTheme = localStorage.getItem('darkMode');
    if (storedTheme === null) {
      // If nothing is stored, default to dark mode and add "dark" class
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', "true");
    } else {
      const isDark = storedTheme === 'true';
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    // Explicitly add or remove the class instead of toggling blindly
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
