import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { beforeEach, afterEach } from 'vitest';

// Vitest automatically sets up jsdom when environment: 'jsdom' is configured

// Clean up after each test
afterEach(() => {
  cleanup();
});
