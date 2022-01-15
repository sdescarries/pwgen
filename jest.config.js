// Jest on steroids 🤹 💊

const { resolve } = require("path");
const {
  accessSync,
  constants,
  mkdirSync,
  statSync,
  writeFileSync,
} = require("fs");

const uncover = [
  `!**/*.{spec,unit,test,jest}.{js,jsx,ts,tsx}`,
  `!**/*.{snap}`,
  `!**/__mocks__/**/*`,
];

const template = {
  verbose: true,

  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },

  coverageDirectory: resolve(`${__dirname}/results/jest/`),

  // The root of the source code, `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src/"],

  // The test environment that will be used for testing, jsdom for browser environment
  testEnvironment: "jsdom",

  modulePathIgnorePatterns: [
    "<rootDir>/.+/__mocks__",
    "<rootDir>/.+/__snapshots__",
  ],

  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: resolve(`${__dirname}/results/jest`),
        expand: true,
      },
    ],
  ],

  // Jest transformations -- this adds support for TypeScript using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

  // Ignore cypress e2e test files
  testPathIgnorePatterns: ["<rootDir>/cypress/"],

  // Important: order matters, specific rules should be defined first
  // See : https://jestjs.io/fr/docs/configuration#modulenamemapper-objectstring-string--arraystring
  moduleNameMapper: {
    ".+\\.(css|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "identity-obj-proxy", // Return proxies objects
    "^@/(.*)$": "<rootDir>/src/$1", // To resolve typescript path aliases
  },

  watchPathIgnorePatterns: ["<rootDir>/node_modules/"],
};

const accessible = (entry) => {
  try {
    accessSync(resolve(`${process.cwd()}/${entry}`), constants.R_OK);
    return true;
  } catch {
    return false;
  }
};

function config() {
  const result = JSON.parse(JSON.stringify(template));
  const argv = process.argv.slice(2).reverse();

  if (argv.includes("--coverage")) {
    // Improve coverage UX by limiting the scope to the same test target

    const accessiblePaths = argv.filter(accessible);

    // Leave default behavior when no path specified (will run coverage on tested files only)
    if (accessiblePaths.length) {
      result.collectCoverageFrom = [`!**/*`];

      accessiblePaths.forEach((candidate) => {
        const info = statSync(candidate);
        const clean = candidate.replace(/(.jest|\/+$)/gim, "");
        const coverage = info.isDirectory()
          ? `${clean}/**/*.{js,jsx,ts,tsx}`
          : clean;
        result.collectCoverageFrom.push(coverage);
      });

      result.collectCoverageFrom.push(...uncover);
    }
  }

  mkdirSync(resolve(`${__dirname}/results/jest/`), { recursive: true });
  writeFileSync(
    resolve(`${__dirname}/results/jest/jest.config.json`),
    JSON.stringify(result, null, 2)
  );

  return result;
}

module.exports = config;
