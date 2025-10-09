// setupTest.js
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers"; // CORRECTED: Use wildcard import

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Cleanup after each test to avoid memory leaks
afterEach(() => {
  cleanup();
});