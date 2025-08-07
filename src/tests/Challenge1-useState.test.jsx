import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom';
import Counter from '../challenges/Challenge1-useState';

describe('Challenge 1: useState Hook - Counter Component', () => {
  test('should display initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  test('should increment count when + button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+');
    
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
    
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();
  });

  test('should decrement count when - button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+');
    const decrementButton = screen.getByText('-');
    
    // First increment to 2
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();
    
    // Then decrement
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  });

  test('should reset count to 0 when Reset button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+');
    const resetButton = screen.getByText('Reset');
    
    // Increment first
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Count: 3/i)).toBeInTheDocument();
    
    // Then reset
    fireEvent.click(resetButton);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  test('should handle negative numbers correctly', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('-');
    
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Count: -1/i)).toBeInTheDocument();
    
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Count: -2/i)).toBeInTheDocument();
  });
});
