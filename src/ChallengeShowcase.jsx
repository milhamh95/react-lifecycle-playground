import React, { useState } from 'react';
import Counter from './challenges/Challenge1-useState';
import UserProfile from './challenges/Challenge2-useEffect-mount';
import SearchComponent from './challenges/Challenge3-useEffect-dependencies';
import RenderTracker from './challenges/Challenge4-useEffect-every-render';
import ThemeApp from './challenges/Challenge5-useContext';

/**
 * Challenge Showcase Component
 * 
 * This component displays all 5 React lifecycle challenges in tabs.
 * Use this to test your solutions as you fix each challenge!
 */

const challenges = [
  {
    id: 1,
    title: 'useState - Counter',
    description: 'Fix the counter component to properly manage state',
    component: Counter,
    concepts: ['useState', 'state management', 'event handlers']
  },
  {
    id: 2,
    title: 'useEffect - Mount Only []',
    description: 'Fix the component to fetch data only when it mounts',
    component: UserProfile,
    concepts: ['useEffect', 'empty dependency array', 'API calls', 'loading states']
  },
  {
    id: 3,
    title: 'useEffect - Dependencies [value]',
    description: 'Fix the search to trigger when search term changes',
    component: SearchComponent,
    concepts: ['useEffect', 'dependency array', 'search functionality', 'debouncing']
  },
  {
    id: 4,
    title: 'useEffect - Every Render',
    description: 'Fix the component to track renders and mouse position',
    component: RenderTracker,
    concepts: ['useEffect', 'no dependency array', 'event listeners', 'cleanup functions']
  },
  {
    id: 5,
    title: 'useContext - Theme System',
    description: 'Fix the theme system using React Context',
    component: ThemeApp,
    concepts: ['useContext', 'createContext', 'Provider pattern', 'prop drilling alternative']
  }
];

const ChallengeShowcase = () => {
  const [activeChallenge, setActiveChallenge] = useState(1);
  
  const currentChallenge = challenges.find(c => c.id === activeChallenge);
  const CurrentComponent = currentChallenge?.component;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '20px', 
        borderBottom: '1px solid #dee2e6' 
      }}>
        <h1 style={{ margin: 0, color: '#343a40' }}>
          🚀 React Lifecycle Challenges
        </h1>
        <p style={{ margin: '10px 0 0 0', color: '#6c757d' }}>
          Fix the broken code in each challenge to learn useState, useEffect, and useContext!
        </p>
      </header>

      {/* Challenge Tabs */}
      <nav style={{ 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #dee2e6',
        padding: '0 20px'
      }}>
        <div style={{ display: 'flex', gap: '0' }}>
          {challenges.map(challenge => (
            <button
              key={challenge.id}
              onClick={() => setActiveChallenge(challenge.id)}
              style={{
                padding: '15px 20px',
                border: 'none',
                backgroundColor: activeChallenge === challenge.id ? '#007bff' : 'transparent',
                color: activeChallenge === challenge.id ? 'white' : '#007bff',
                cursor: 'pointer',
                borderBottom: activeChallenge === challenge.id ? '3px solid #007bff' : '3px solid transparent',
                fontSize: '14px',
                fontWeight: activeChallenge === challenge.id ? 'bold' : 'normal',
                transition: 'all 0.2s'
              }}
            >
              Challenge {challenge.id}
            </button>
          ))}
        </div>
      </nav>

      {/* Challenge Info */}
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '20px',
        borderBottom: '1px solid #dee2e6'
      }}>
        <h2 style={{ margin: '0 0 10px 0', color: '#343a40' }}>
          {currentChallenge?.title}
        </h2>
        <p style={{ margin: '0 0 15px 0', color: '#6c757d' }}>
          {currentChallenge?.description}
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {currentChallenge?.concepts.map(concept => (
            <span
              key={concept}
              style={{
                backgroundColor: '#e9ecef',
                color: '#495057',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}
            >
              {concept}
            </span>
          ))}
        </div>
      </div>

      {/* Challenge Component */}
      <main style={{ 
        minHeight: '500px',
        backgroundColor: '#ffffff'
      }}>
        {CurrentComponent && <CurrentComponent />}
      </main>

      {/* Instructions Footer */}
      <footer style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '20px',
        borderTop: '1px solid #dee2e6'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h3 style={{ margin: '0 0 15px 0', color: '#343a40' }}>
            📝 Instructions
          </h3>
          <ol style={{ color: '#6c757d', lineHeight: '1.6' }}>
            <li>Open the challenge file: <code>src/challenges/Challenge{activeChallenge}-*.jsx</code></li>
            <li>Read the TODO comments and requirements</li>
            <li>Fix the broken code by adding the missing React hooks</li>
            <li>Test your solution by interacting with the component above</li>
            <li>Run the unit tests: <code>npm test Challenge{activeChallenge}</code></li>
            <li>Compare with the solution in <code>answers/</code> folder if needed</li>
          </ol>
          <div style={{ 
            marginTop: '15px', 
            padding: '10px', 
            backgroundColor: '#d1ecf1',
            border: '1px solid #bee5eb',
            borderRadius: '4px'
          }}>
            <strong>💡 Tip:</strong> Each challenge focuses on different React lifecycle concepts. 
            Take your time to understand when and why each hook runs!
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChallengeShowcase;
