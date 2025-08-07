import React from 'react';

/**
 * Challenge 4: useEffect Hook - Run on Every Render
 * 
 * OBJECTIVE: Fix the component to track render count and mouse position
 * 
 * REQUIREMENTS:
 * 1. Add useState to manage renderCount and mousePosition
 * 2. Add useEffect with NO dependency array to run on every render
 * 3. Track how many times the component has rendered
 * 4. Add mouse move event listener to track mouse position
 * 5. Clean up event listener in useEffect cleanup function
 * 
 * BROKEN CODE ISSUES:
 * - Missing useEffect and useState imports
 * - No state management for render count and mouse position
 * - Event listener not properly added/removed
 * - useEffect missing or has wrong dependency array
 * 
 * WARNING: useEffect without dependency array runs on EVERY render!
 * This can cause performance issues if not used carefully.
 */

const RenderTracker = () => {
  // TODO: Add useState for renderCount and mousePosition
  const renderCount = 0;
  const mousePosition = { x: 0, y: 0 };

  // TODO: Add useEffect with NO dependency array (runs on every render)
  // This should:
  // 1. Increment render count on every render
  // 2. Add mouse move event listener
  // 3. Return cleanup function to remove event listener

  // TODO: Fix this mouse handler to update mousePosition state
  const handleMouseMove = (event) => {
    // This won't work without state management
    console.log('Mouse position:', event.clientX, event.clientY);
  };

  // TODO: Fix this button handler to trigger re-renders
  const forceReRender = () => {
    // This should trigger a re-render somehow
    console.log('Forcing re-render...');
  };

  return (
    <div style={{ padding: '20px', height: '400px' }}>
      <h2>useEffect Challenge - Every Render (no dependency array)</h2>
      
      <div style={{ 
        border: '1px solid #ccc', 
        padding: '15px', 
        borderRadius: '5px',
        marginBottom: '20px'
      }}>
        <h3>Render Information</h3>
        {/* TODO: Fix these to display actual state values */}
        <p><strong>Render Count:</strong> {renderCount}</p>
        <p><strong>Mouse Position:</strong> X: {mousePosition.x}, Y: {mousePosition.y}</p>
      </div>

      <button 
        onClick={forceReRender}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Force Re-render
      </button>

      <div style={{ 
        marginTop: '20px', 
        padding: '10px', 
        backgroundColor: '#fff3cd',
        border: '1px solid #ffeaa7',
        borderRadius: '4px'
      }}>
        <p style={{ margin: 0, fontSize: '14px' }}>
          <strong>Move your mouse around this area to see position tracking!</strong><br/>
          This effect runs on EVERY render (no dependency array).
        </p>
      </div>

      <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
        ⚠️ This effect runs on every render - use with caution in real applications!
      </p>
    </div>
  );
};

export default RenderTracker;
