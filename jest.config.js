module.exports = {
    "roots": [
      "<rootDir>/src",
      "<rootDir>/test",
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.ts'
    ],
    testMatch: ["<rootDir>/test/**/*.test.ts"],
    testResultsProcessor: "jest-sonar-reporter",
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    setupFiles: ["<rootDir>/test/jest/config.js"],
    reporters: [
        "default",
        [
            "./node_modules/jest-html-reporter",
            {
                pageTitle: "Test Report"
            }
        ]
    ]
  }
