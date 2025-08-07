import React, { useState } from 'react';

/**
 * SOLUTION: Challenge 1 - useState Hook
 * 
 * This solution demonstrates proper useState usage for managing component state.
 */

const Counter = () => {
  // ✅ FIXED: Added useState hook to manage count state
  const [count, setCount] = useState(0);

  // ✅ FIXED: Functions now properly update state using setCount
  const increment = () => {
    setCount(count + 1);
    // Alternative: setCount(prevCount => prevCount + 1); // Better for multiple rapid updates
  };

  const decrement = () => {
    setCount(count - 1);
    // Alternative: setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>useState Challenge - Counter</h2>
      <div style={{ fontSize: '24px', margin: '20px' }}>
        {/* ✅ FIXED: Now displays the actual count state */}
        Count: {count}
      </div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
