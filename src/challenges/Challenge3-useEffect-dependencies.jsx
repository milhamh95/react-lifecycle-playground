import React, { useState, useEffect } from 'react';

/**
 * Challenge 3: useEffect Hook - Run on Dependency Changes
 * 
 * OBJECTIVE: Fix the search component to fetch results when search term changes
 * 
 * REQUIREMENTS:
 * 1. Add useState to manage searchTerm, searchResults, and loading state
 * 2. Add useEffect with [searchTerm] dependency to run when search term changes
 * 3. Only search when searchTerm is not empty
 * 4. Display loading state while searching
 * 5. Display search results once loaded
 * 
 * BROKEN CODE ISSUES:
 * - Missing useEffect and useState imports
 * - No state management for search functionality
 * - Search doesn't trigger when input changes
 * - No dependency array specified for useEffect
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
  // TODO: Add useState for searchTerm, searchResults, and isLoading
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Add useEffect with [searchTerm] dependency array
  // This should:
  // 1. Only run when searchTerm changes
  // 2. Only search if searchTerm is not empty
  // 3. Set loading state while searching
  // 4. Update results when search completes

  // TODO: Fix this input handler to update searchTerm state
  const handleInputChange = (e) => {
    const value = e.target.value;
    // This won't work without state management
    setSearchTerm(value);
  };

  useEffect(() => {
    const loadItems = async () => {
      if (searchTerm === "") {
        setIsLoading(false);
        setSearchResults([]);
        return;
      }
      try {
        setIsLoading(true);
        const data = await searchItems(searchTerm);
        setSearchResults(data);
      } catch (err) {
        console.error('Failed to fetch search results:', err);
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadItems();
  }, [searchTerm])

  return (
    <div style={{ padding: '20px', color: "black" }}>
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
        {/* TODO: Fix the display logic */}
        {isLoading ? (
          <p style={{color: 'black'}}>Searching...</p>
        ) : searchTerm === '' ? (
          <p style={{color: 'black'}}>Enter a search term to find fruits</p>
        ) : searchResults.length > 0 ? (
          <div style={{color: 'black'}}>
            <h3>Search Results:</h3>
            <ul>
              {searchResults.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p style={{color: 'black'}}>No results found for "{searchTerm}"</p>
        )}
      </div>
      
      <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
        This effect should run when searchTerm changes (dependency array [searchTerm])
      </p>
    </div>
  );
};

export default SearchComponent;
