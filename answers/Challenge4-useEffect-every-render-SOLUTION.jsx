import React, { useState, useEffect } from 'react';

/**
 * SOLUTION: Challenge 4 - useEffect Hook (Run on Every Render)
 * 
 * This solution demonstrates useEffect with NO dependency array
 * to run side effects on every render. Use with caution!
 */

const RenderTracker = () => {
  // ✅ FIXED: Added useState for renderCount and mousePosition
  const [renderCount, setRenderCount] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [forceRenderTrigger, setForceRenderTrigger] = useState(0);

  // ✅ FIXED: Mouse handler now properly updates mousePosition state
  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  // ✅ FIXED: Added useEffect with NO dependency array (runs on every render)
  useEffect(() => {
    // Increment render count on every render
    setRenderCount(prevCount => prevCount + 1);

    // Add mouse move event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Return cleanup function to remove event listener
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }); // No dependency array = runs on every render

  // ✅ FIXED: Button handler now triggers re-renders
  const forceReRender = () => {
    setForceRenderTrigger(prev => prev + 1);
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
        {/* ✅ FIXED: Now displays actual state values */}
        <p><strong>Render Count:</strong> {renderCount}</p>
        <p><strong>Mouse Position:</strong> X: {mousePosition.x}, Y: {mousePosition.y}</p>
        <p><strong>Force Render Trigger:</strong> {forceRenderTrigger}</p>
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
        ⚠️ This effect runs on every render - use with caution in real applications!<br/>
        Notice how the render count increases rapidly due to mouse movement updates.
      </p>
    </div>
  );
};

export default RenderTracker;
