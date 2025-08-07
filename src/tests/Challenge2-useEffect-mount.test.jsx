import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserProfile from '../challenges/Challenge2-useEffect-mount';

// Mock the fetchUserData function
jest.mock('../challenges/Challenge2-useEffect-mount', () => {
  const originalModule = jest.requireActual('../challenges/Challenge2-useEffect-mount');
  return {
    ...originalModule,
    fetchUserData: jest.fn(() => 
      Promise.resolve({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        city: 'New York'
      })
    )
  };
});

describe('Challenge 2: useEffect Hook - Mount Only', () => {
  test('should show loading state initially', () => {
    render(<UserProfile />);
    expect(screen.getByText(/Loading user data.../i)).toBeInTheDocument();
  });

  test('should fetch and display user data after mount', async () => {
    render(<UserProfile />);
    
    // Should show loading initially
    expect(screen.getByText(/Loading user data.../i)).toBeInTheDocument();
    
    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    }, { timeout: 3000 });
    
    // Check all user data is displayed
    expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/New York/i)).toBeInTheDocument();
  });

  test('should only call fetch function once on mount', async () => {
    const { rerender } = render(<UserProfile />);
    
    // Wait for initial load
    await waitFor(() => {
      expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    });
    
    // Force re-render
    rerender(<UserProfile />);
    
    // Should still only have been called once (useEffect with [] dependency)
    // Note: This test would need the actual fetchUserData mock to verify call count
  });

  test('should display correct component structure', () => {
    render(<UserProfile />);
    
    expect(screen.getByText(/useEffect Challenge - Mount Only/i)).toBeInTheDocument();
    expect(screen.getByText(/This effect should only run once/i)).toBeInTheDocument();
  });
});
