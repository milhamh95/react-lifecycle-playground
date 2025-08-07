# 🚀 React Lifecycle Playground

A hands-on learning project to master React hooks: `useState`, `useEffect`, and `useContext`. This playground contains 5 code challenges with intentionally broken code that you need to fix!

## 📚 What You'll Learn

- **useState**: Managing component state
- **useEffect**: Side effects and lifecycle methods
  - Empty dependency array `[]` (run once on mount)
  - Dependency array `[value]` (run when dependencies change)
  - No dependency array (run on every render)
- **useContext**: Sharing state across components without prop drilling

## 🎯 Challenges Overview

### Challenge 1: useState - Counter
**File**: `src/challenges/Challenge1-useState.jsx`
**Goal**: Fix a broken counter component
**Concepts**: State management, event handlers

### Challenge 2: useEffect - Mount Only
**File**: `src/challenges/Challenge2-useEffect-mount.jsx`
**Goal**: Fetch user data only when component mounts
**Concepts**: API calls, loading states, empty dependency array `[]`

### Challenge 3: useEffect - Dependencies
**File**: `src/challenges/Challenge3-useEffect-dependencies.jsx`
**Goal**: Search functionality that triggers on input changes
**Concepts**: Dependency arrays `[searchTerm]`, debouncing

### Challenge 4: useEffect - Every Render
**File**: `src/challenges/Challenge4-useEffect-every-render.jsx`
**Goal**: Track render count and mouse position
**Concepts**: No dependency array, event listeners, cleanup functions

### Challenge 5: useContext - Theme System
**File**: `src/challenges/Challenge5-useContext.jsx`
**Goal**: Implement a theme toggle system
**Concepts**: Context API, Provider pattern, avoiding prop drilling

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd react-lifecycle-playground

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests for a specific challenge
npm test Challenge1
npm test Challenge2
# ... etc

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 📝 How to Complete the Challenges

1. **Start the dev server**: `npm run dev`
2. **Open your browser** to see the challenge showcase
3. **Select a challenge** from the tabs
4. **Read the broken code** in `src/challenges/Challenge*.jsx`
5. **Fix the issues** by adding the missing React hooks
6. **Test your solution** by interacting with the component
7. **Run unit tests** to verify your implementation
8. **Compare with solutions** in the `answers/` folder if needed

## 🔍 What to Look For

Each challenge file contains:
- **TODO comments** explaining what needs to be fixed
- **BROKEN CODE ISSUES** section listing the problems
- **REQUIREMENTS** section with clear objectives
- **Detailed comments** explaining the expected behavior

## 🧪 Testing

Each challenge has comprehensive unit tests that verify:
- Component renders correctly
- State updates work as expected
- Effects run at the right times
- Event handlers function properly
- Context provides data correctly

## 📁 Project Structure

```
src/
├── challenges/           # Broken challenge files to fix
│   ├── Challenge1-useState.jsx
│   ├── Challenge2-useEffect-mount.jsx
│   ├── Challenge3-useEffect-dependencies.jsx
│   ├── Challenge4-useEffect-every-render.jsx
│   └── Challenge5-useContext.jsx
├── tests/               # Unit tests for each challenge
│   ├── setup.js
│   ├── Challenge1-useState.test.jsx
│   ├── Challenge2-useEffect-mount.test.jsx
│   ├── Challenge3-useEffect-dependencies.test.jsx
│   ├── Challenge4-useEffect-every-render.test.jsx
│   └── Challenge5-useContext.test.jsx
├── ChallengeShowcase.jsx # Main showcase component
└── App.jsx              # Root application component

answers/                 # Working solutions
├── Challenge1-useState-SOLUTION.jsx
├── Challenge2-useEffect-mount-SOLUTION.jsx
├── Challenge3-useEffect-dependencies-SOLUTION.jsx
├── Challenge4-useEffect-every-render-SOLUTION.jsx
└── Challenge5-useContext-SOLUTION.jsx
```

## 💡 Learning Tips

1. **Read the React docs** for each hook before starting
2. **Understand the dependency arrays** - this is crucial for useEffect
3. **Pay attention to cleanup functions** in useEffect
4. **Use the browser dev tools** to debug state changes
5. **Run tests frequently** to catch issues early
6. **Don't peek at solutions** until you've tried yourself!

## 🎨 Features

- **Interactive Challenge Browser**: Switch between challenges with tabs
- **Real-time Testing**: See your fixes work immediately
- **Comprehensive Tests**: Unit tests for every challenge
- **Detailed Solutions**: Complete working examples
- **Modern Setup**: Vite + React + Vitest for fast development

## 🤝 Contributing

Found a bug or want to add more challenges? PRs welcome!

## 📄 License

MIT License - feel free to use this for learning!

---

**Happy coding! 🎉**

Remember: The goal isn't just to make the tests pass, but to understand *why* each hook behaves the way it does. Take your time and experiment!
