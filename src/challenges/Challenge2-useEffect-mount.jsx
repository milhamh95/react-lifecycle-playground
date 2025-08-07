import React from 'react';

/**
 * Challenge 2: useEffect Hook - Run Once on Mount
 * 
 * OBJECTIVE: Fix the component to fetch user data when it first mounts
 * 
 * REQUIREMENTS:
 * 1. Add useState to manage user data and loading state
 * 2. Add useEffect with empty dependency array [] to run only on mount
 * 3. Fetch user data from API when component mounts
 * 4. Display loading state while fetching
 * 5. Display user data once loaded
 * 
 * BROKEN CODE ISSUES:
 * - Missing useEffect and useState imports
 * - No state management for user data
 * - API call happens on every render instead of just mount
 * - No loading state handling
 */

// Mock API function (simulates real API call)
const fetchUserData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        city: 'New York'
      });
    }, 2000); // 2 second delay to simulate network
  });
};

const UserProfile = () => {
  // TODO: Add useState for user data and loading state
  const userData = null;
  const isLoading = false;

  // TODO: Add useEffect to fetch data ONLY on mount (empty dependency array [])
  // This should run the fetchUserData function and update state
  
  // BROKEN: This runs on every render!
  fetchUserData().then(data => {
    // This won't work without proper state management
    console.log('User data:', data);
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>useEffect Challenge - Mount Only ([])</h2>
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
        {/* TODO: Fix loading and data display */}
        {isLoading ? (
          <p>Loading user data...</p>
        ) : userData ? (
          <div>
            <h3>User Profile</h3>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>City:</strong> {userData.city}</p>
          </div>
        ) : (
          <p>No user data available</p>
        )}
      </div>
      <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
        This effect should only run once when the component mounts (empty dependency array [])
      </p>
    </div>
  );
};

export default UserProfile;
