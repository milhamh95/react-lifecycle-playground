import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchComponent from '../challenges/Challenge3-useEffect-dependencies';

describe('Challenge 3: useEffect Hook - Dependencies', () => {
  test('should show initial empty state message', () => {
    render(<SearchComponent />);
    expect(screen.getByText(/Enter a search term to find fruits/i)).toBeInTheDocument();
  });

  test('should update search term when typing in input', () => {
    render(<SearchComponent />);
    const input = screen.getByPlaceholderText(/Search for fruits.../i);
    
    fireEvent.change(input, { target: { value: 'apple' } });
    expect(input.value).toBe('apple');
  });

  test('should show loading state when searching', async () => {
    render(<SearchComponent />);
    const input = screen.getByPlaceholderText(/Search for fruits.../i);
    
    fireEvent.change(input, { target: { value: 'apple' } });
    
    // Should show loading state
    expect(screen.getByText(/Searching.../i)).toBeInTheDocument();
  });

  test('should display search results after search completes', async () => {
    render(<SearchComponent />);
    const input = screen.getByPlaceholderText(/Search for fruits.../i);
    
    fireEvent.change(input, { target: { value: 'apple' } });
    
    // Wait for search to complete
    await waitFor(() => {
      expect(screen.getByText(/Apple/i)).toBeInTheDocument();
    }, { timeout: 2000 });
    
    expect(screen.getByText(/Search Results:/i)).toBeInTheDocument();
  });

  test('should show no results message for non-matching search', async () => {
    render(<SearchComponent />);
    const input = screen.getByPlaceholderText(/Search for fruits.../i);
    
    fireEvent.change(input, { target: { value: 'xyz' } });
    
    await waitFor(() => {
      expect(screen.getByText(/No results found for "xyz"/i)).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  test('should clear results when search term is cleared', async () => {
    render(<SearchComponent />);
    const input = screen.getByPlaceholderText(/Search for fruits.../i);
    
    // First search for something
    fireEvent.change(input, { target: { value: 'apple' } });
    await waitFor(() => {
      expect(screen.getByText(/Apple/i)).toBeInTheDocument();
    });
    
    // Then clear the search
    fireEvent.change(input, { target: { value: '' } });
    expect(screen.getByText(/Enter a search term to find fruits/i)).toBeInTheDocument();
  });

  test('should trigger new search when search term changes', async () => {
    render(<SearchComponent />);
    const input = screen.getByPlaceholderText(/Search for fruits.../i);
    
    // Search for 'a'
    fireEvent.change(input, { target: { value: 'a' } });
    await waitFor(() => {
      expect(screen.getByText(/Apple/i)).toBeInTheDocument();
    });
    
    // Change search to 'b'
    fireEvent.change(input, { target: { value: 'b' } });
    await waitFor(() => {
      expect(screen.getByText(/Banana/i)).toBeInTheDocument();
    });
  });
});
