import React from 'react';

/**
 * Challenge 5: useContext Hook
 * 
 * OBJECTIVE: Fix the theme system using React Context
 * 
 * REQUIREMENTS:
 * 1. Create a ThemeContext using createContext
 * 2. Create a ThemeProvider component that provides theme state
 * 3. Use useContext in child components to access theme
 * 4. Implement theme toggle functionality (light/dark)
 * 5. Apply theme styles to components
 * 
 * BROKEN CODE ISSUES:
 * - Missing createContext and useContext imports
 * - No context provider setup
 * - Components can't access theme data
 * - Theme toggle doesn't work
 * - No theme styles applied
 */

// TODO: Create ThemeContext using createContext
// const ThemeContext = createContext();

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

// TODO: Create ThemeProvider component
// This should:
// 1. Manage theme state (light/dark)
// 2. Provide theme value and toggle function via context
// 3. Wrap children with ThemeContext.Provider
const ThemeProvider = ({ children }) => {
  // TODO: Add useState for current theme
  const currentTheme = 'light';
  
  // TODO: Add toggle function
  const toggleTheme = () => {
    // This should switch between light and dark
    console.log('Toggle theme called');
  };

  // TODO: Create context value object
  const themeValue = {
    theme: themes[currentTheme],
    currentTheme,
    toggleTheme
  };

  return (
    <div>
      {/* TODO: Wrap with ThemeContext.Provider and pass themeValue */}
      {children}
    </div>
  );
};

// Header component that should use theme context
const Header = () => {
  // TODO: Use useContext to get theme data
  // const { theme, currentTheme, toggleTheme } = useContext(ThemeContext);
  
  // BROKEN: No access to theme context
  const theme = themes.light; // Hardcoded!
  const currentTheme = 'light'; // Hardcoded!
  const toggleTheme = () => console.log('No context!');

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

// Content component that should use theme context
const Content = () => {
  // TODO: Use useContext to get theme data
  // const { theme } = useContext(ThemeContext);
  
  // BROKEN: No access to theme context
  const theme = themes.light; // Hardcoded!

  return (
    <main style={{
      padding: '20px',
      backgroundColor: theme.backgroundColor,
      color: theme.color,
      minHeight: '300px'
    }}>
      <h2>Theme Context Demo</h2>
      <p>This content should change appearance based on the selected theme.</p>
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

// Main component that should wrap everything with ThemeProvider
const ThemeApp = () => {
  return (
    <div>
      {/* TODO: Wrap with ThemeProvider */}
      <Header />
      <Content />
      <div style={{ padding: '20px', fontSize: '12px', color: '#666' }}>
        <p>
          This challenge demonstrates useContext for sharing theme data across components.
          Fix the context setup to make the theme toggle work!
        </p>
      </div>
    </div>
  );
};

export default ThemeApp;
