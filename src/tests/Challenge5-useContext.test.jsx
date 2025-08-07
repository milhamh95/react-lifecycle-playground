import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeApp from '../challenges/Challenge5-useContext';

describe('Challenge 5: useContext Hook - Theme System', () => {
  test('should display theme app header', () => {
    render(<ThemeApp />);
    expect(screen.getByText(/useContext Challenge - Theme System/i)).toBeInTheDocument();
  });

  test('should display theme toggle button', () => {
    render(<ThemeApp />);
    const toggleButton = screen.getByText(/Switch to/i);
    expect(toggleButton).toBeInTheDocument();
  });

  test('should display main content', () => {
    render(<ThemeApp />);
    expect(screen.getByText(/Theme Context Demo/i)).toBeInTheDocument();
    expect(screen.getByText(/This content should change appearance/i)).toBeInTheDocument();
  });

  test('should display card component', () => {
    render(<ThemeApp />);
    expect(screen.getByText(/Card Component/i)).toBeInTheDocument();
    expect(screen.getByText(/This card also uses the theme context/i)).toBeInTheDocument();
  });

  test('should show initial light theme button text', () => {
    render(<ThemeApp />);
    // Should show option to switch to dark theme when currently light
    expect(screen.getByText(/Switch to Dark Theme/i)).toBeInTheDocument();
  });

  test('should toggle theme when button is clicked', () => {
    render(<ThemeApp />);
    const toggleButton = screen.getByText(/Switch to Dark Theme/i);
    
    fireEvent.click(toggleButton);
    
    // After clicking, should show option to switch back to light
    // Note: This test will only pass if useContext is properly implemented
    expect(screen.getByText(/Switch to Light Theme/i)).toBeInTheDocument();
  });

  test('should apply theme styles to components', () => {
    render(<ThemeApp />);
    
    // Check if header has proper styling attributes
    const header = screen.getByRole('banner');
    expect(header).toHaveStyle('padding: 20px');
    
    // Check if main content exists
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  test('should display context explanation text', () => {
    render(<ThemeApp />);
    expect(screen.getByText(/This challenge demonstrates useContext/i)).toBeInTheDocument();
    expect(screen.getByText(/Fix the context setup/i)).toBeInTheDocument();
  });

  test('should maintain theme state across re-renders', () => {
    const { rerender } = render(<ThemeApp />);
    const toggleButton = screen.getByText(/Switch to Dark Theme/i);
    
    fireEvent.click(toggleButton);
    
    // Re-render component
    rerender(<ThemeApp />);
    
    // Theme state should persist (if context is working)
    // Note: This test will only pass if useContext is properly implemented
    expect(screen.getByText(/Switch to Light Theme/i)).toBeInTheDocument();
  });
});
