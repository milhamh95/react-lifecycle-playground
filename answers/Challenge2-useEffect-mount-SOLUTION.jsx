import React, { useState, useEffect } from 'react';

/**
 * SOLUTION: Challenge 2 - useEffect Hook (Run Once on Mount)
 * 
 * This solution demonstrates useEffect with empty dependency array []
 * to run side effects only once when the component mounts.
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
  // ✅ FIXED: Added useState for user data and loading state
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ FIXED: Added useEffect with empty dependency array [] to run only on mount
  useEffect(() => {
    const loadUserData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <div style={{ padding: '20px' }}>
      <h2>useEffect Challenge - Mount Only ([])</h2>
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
        {/* ✅ FIXED: Proper loading and data display logic */}
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
        This effect only runs once when the component mounts (empty dependency array [])
      </p>
    </div>
  );
};

export default UserProfile;
