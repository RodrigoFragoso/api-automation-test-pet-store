export default {
  testMatch: ["<rootDir>/src/tests/integration/**/*.test.ts"],
  testPathIgnorePatterns: [
    "/node_modules/",
  ],
  testTimeout: 60000,
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./reports-integration-tests",
        filename: "integration-test-report.html",
        openReport: false,
        pageTitle: "Integration Test Report",
      },
    ],
    [
      "jest-junit",
      {
        outputDirectory: "./reports-integration-tests",
        outputName: "integration-test-report.xml",
        reportTestSuiteErrors: true,
      },
    ],
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
