module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/tests"],
  moduleFileExtensions: ["ts", "js", "json"],
  testMatch: ["**/*.test.ts"],
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  testTimeout: 30000,
  // Module name mapping for absolute imports
  moduleNameMapper: {
    "^@agent/(.*)$": "<rootDir>/src/agent/$1",
    "^@extension/(.*)$": "<rootDir>/src/extension/$1",
    "^@mcp/(.*)$": "<rootDir>/src/mcp/$1",
    "^@server/(.*)$": "<rootDir>/src/server/$1",
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
    "^@types/(.*)$": "<rootDir>/src/types/$1",
  },
  // Explicitly set transform for TypeScript files
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
      },
    ],
  },
  // Clear mocks between tests
  clearMocks: true,
};
