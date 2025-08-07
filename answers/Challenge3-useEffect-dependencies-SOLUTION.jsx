import React, { useState, useEffect } from 'react';

/**
 * SOLUTION: Challenge 3 - useEffect Hook (Run on Dependency Changes)
 * 
 * This solution demonstrates useEffect with dependency array [searchTerm]
 * to run side effects when specific values change.
 */

// Mock search API function
const searchItems = async (term) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allItems = [
        'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
        'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon'
      ];
      const filtered = allItems.filter(item => 
        item.toLowerCase().includes(term.toLowerCase())
      );
      resolve(filtered);
    }, 1000); // 1 second delay to simulate API call
  });
};

const SearchComponent = () => {
  // ✅ FIXED: Added useState for searchTerm, searchResults, and isLoading
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ FIXED: Added useEffect with [searchTerm] dependency array
  useEffect(() => {
    // Only search if searchTerm is not empty
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setIsLoading(false);
      return;
    }

    const performSearch = async () => {
      setIsLoading(true);
      try {
        const results = await searchItems(searchTerm);
        setSearchResults(results);
      } catch (error) {
        console.error('Search failed:', error);
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    performSearch();
  }, [searchTerm]); // This effect runs when searchTerm changes

  // ✅ FIXED: Input handler now properly updates searchTerm state
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>useEffect Challenge - Dependencies ([searchTerm])</h2>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search for fruits..."
          value={searchTerm}
          onChange={handleInputChange}
          style={{ 
            padding: '10px', 
            width: '300px', 
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
      </div>
      
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
        {/* ✅ FIXED: Proper display logic with state values */}
        {isLoading ? (
          <p>Searching...</p>
        ) : searchTerm === '' ? (
          <p>Enter a search term to find fruits</p>
        ) : searchResults.length > 0 ? (
          <div>
            <h3>Search Results:</h3>
            <ul>
              {searchResults.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No results found for "{searchTerm}"</p>
        )}
      </div>
      
      <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
        This effect runs when searchTerm changes (dependency array [searchTerm])
      </p>
    </div>
  );
};

export default SearchComponent;
