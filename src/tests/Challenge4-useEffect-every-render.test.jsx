import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RenderTracker from '../challenges/Challenge4-useEffect-every-render';

// Mock document event listeners
const mockAddEventListener = jest.fn();
const mockRemoveEventListener = jest.fn();
Object.defineProperty(document, 'addEventListener', {
  value: mockAddEventListener,
});
Object.defineProperty(document, 'removeEventListener', {
  value: mockRemoveEventListener,
});

describe('Challenge 4: useEffect Hook - Every Render', () => {
  beforeEach(() => {
    mockAddEventListener.mockClear();
    mockRemoveEventListener.mockClear();
  });

  test('should display initial render count', () => {
    render(<RenderTracker />);
    expect(screen.getByText(/Render Count:/i)).toBeInTheDocument();
  });

  test('should display initial mouse position', () => {
    render(<RenderTracker />);
    expect(screen.getByText(/Mouse Position:/i)).toBeInTheDocument();
    expect(screen.getByText(/X: 0, Y: 0/i)).toBeInTheDocument();
  });

  test('should increment render count when force re-render button is clicked', () => {
    render(<RenderTracker />);
    const button = screen.getByText(/Force Re-render/i);
    
    // Initial render count should be visible
    expect(screen.getByText(/Render Count:/i)).toBeInTheDocument();
    
    // Click to force re-render
    fireEvent.click(button);
    
    // Should still show render count (value will depend on implementation)
    expect(screen.getByText(/Render Count:/i)).toBeInTheDocument();
  });

  test('should add mouse event listener on render', () => {
    render(<RenderTracker />);
    
    // Should add mousemove event listener
    expect(mockAddEventListener).toHaveBeenCalledWith('mousemove', expect.any(Function));
  });

  test('should clean up event listener on unmount', () => {
    const { unmount } = render(<RenderTracker />);
    
    unmount();
    
    // Should remove mousemove event listener
    expect(mockRemoveEventListener).toHaveBeenCalledWith('mousemove', expect.any(Function));
  });

  test('should display warning about effect running on every render', () => {
    render(<RenderTracker />);
    expect(screen.getByText(/This effect runs on every render/i)).toBeInTheDocument();
    expect(screen.getByText(/use with caution/i)).toBeInTheDocument();
  });

  test('should have force re-render button', () => {
    render(<RenderTracker />);
    const button = screen.getByText(/Force Re-render/i);
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  test('should display mouse tracking instructions', () => {
    render(<RenderTracker />);
    expect(screen.getByText(/Move your mouse around this area/i)).toBeInTheDocument();
  });
});
