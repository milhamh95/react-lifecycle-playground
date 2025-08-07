import React, { createContext, useContext, useState } from 'react';

/**
 * SOLUTION: Challenge 5 - useContext Hook
 * 
 * This solution demonstrates proper useContext usage for sharing state
 * across components without prop drilling.
 */

// ✅ FIXED: Created ThemeContext using createContext
const ThemeContext = createContext();

// Mock theme configurations
const themes = {
  light: {
    backgroundColor: '#ffffff',
    color: '#000000',
    buttonBg: '#007bff',
    buttonColor: '#ffffff'
  },
  dark: {
    backgroundColor: '#2d3748',
    color: '#ffffff',
    buttonBg: '#4a5568',
    buttonColor: '#ffffff'
  }
};

// ✅ FIXED: Created proper ThemeProvider component
const ThemeProvider = ({ children }) => {
  // ✅ FIXED: Added useState for current theme
  const [currentTheme, setCurrentTheme] = useState('light');
  
  // ✅ FIXED: Added proper toggle function
  const toggleTheme = () => {
    setCurrentTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // ✅ FIXED: Created context value object with theme data and functions
  const themeValue = {
    theme: themes[currentTheme],
    currentTheme,
    toggleTheme
  };

  return (
    // ✅ FIXED: Properly wrapped with ThemeContext.Provider and passed themeValue
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Header component that uses theme context
const Header = () => {
  // ✅ FIXED: Used useContext to get theme data from context
  const { theme, currentTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{
      padding: '20px',
      backgroundColor: theme.backgroundColor,
      color: theme.color,
      borderBottom: '1px solid #ccc'
    }}>
      <h1>useContext Challenge - Theme System</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: '8px 16px',
          backgroundColor: theme.buttonBg,
          color: theme.buttonColor,
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Switch to {currentTheme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </header>
  );
};

// Content component that uses theme context
const Content = () => {
  // ✅ FIXED: Used useContext to get theme data from context
  const { theme } = useContext(ThemeContext);

  return (
    <main style={{
      padding: '20px',
      backgroundColor: theme.backgroundColor,
      color: theme.color,
      minHeight: '300px'
    }}>
      <h2>Theme Context Demo</h2>
      <p>This content changes appearance based on the selected theme.</p>
      <div style={{
        padding: '15px',
        border: `1px solid ${theme.color}`,
        borderRadius: '5px',
        marginTop: '20px'
      }}>
        <h3>Card Component</h3>
        <p>This card also uses the theme context for consistent styling.</p>
      </div>
    </main>
  );
};

// Main component that wraps everything with ThemeProvider
const ThemeApp = () => {
  return (
    // ✅ FIXED: Wrapped with ThemeProvider to provide context to all children
    <ThemeProvider>
      <Header />
      <Content />
      <div style={{ padding: '20px', fontSize: '12px', color: '#666' }}>
        <p>
          This challenge demonstrates useContext for sharing theme data across components.
          The theme toggle now works properly with context!
        </p>
      </div>
    </ThemeProvider>
  );
};

export default ThemeApp;
