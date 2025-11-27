// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Import cleanup and afterEach
import { cleanup } from '@testing-library/react/pure';
import { afterEach } from '@jest/globals';

// Run cleanup after each test case (e.g., unmount components)
afterEach(() => {
  cleanup();
});

