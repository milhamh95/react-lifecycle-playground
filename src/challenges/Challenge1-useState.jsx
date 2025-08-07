import React, { useState } from 'react';

/**
 * Challenge 1: useState Hook
 * 
 * OBJECTIVE: Fix the counter component to properly manage state
 * 
 * REQUIREMENTS:
 * 1. Initialize count state with value 0
 * 2. Implement increment function that adds 1 to count
 * 3. Implement decrement function that subtracts 1 from count
 * 4. Implement reset function that sets count back to 0
 * 5. Display the current count value
 * 
 * BROKEN CODE ISSUES:
 * - Missing useState import and usage
 * - Functions don't update state
 * - Count value is not displayed properly
 */

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{color: 'black'}}>useState Challenge - Counter</h2>
      <div style={{ fontSize: '24px', margin: '20px', color: 'black' }}>
        {/* TODO: Fix this to display the actual count state */}
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
