// Jest on steroids 🤹 💊
import type { Config } from '@jest/types';
import {
  accessSync,
  constants,
  mkdirSync,
  statSync,
  writeFileSync,
} from 'fs';
import { resolve } from 'path';

const uncover = [
  '!**/*.{spec,unit,test,jest}.{js,jsx,ts,tsx}',
  '!**/*.{snap}',
  '!**/__mocks__/**/*',
];

const template: Config.InitialOptions = ({
  verbose: true,

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },

  coverageDirectory: resolve(`${__dirname}/results/jest/`),

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // The root of the source code, `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src/'],

  // The test environment that will be used for testing, jsdom for browser environment
  testEnvironment: 'jsdom',

  modulePathIgnorePatterns: [
    '<rootDir>/.+/__mocks__',
    '<rootDir>/.+/__snapshots__',
  ],

  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: resolve(`${__dirname}/results/jest`),
        expand: true,
      },
    ],
  ],

  // Jest transformations -- this adds support for TypeScript using ts-jest
  transform: {
    '^.+\\.[t]sx?$': 'ts-jest',
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // Ignore cypress e2e test files
  testPathIgnorePatterns: ['<rootDir>/cypress/'],

  // Important: order matters, specific rules should be defined first
  // See : https://jestjs.io/fr/docs/configuration#modulenamemapper-objectstring-string--arraystring
  moduleNameMapper: {
    '.+\\.(css|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'identity-obj-proxy', // Return proxies objects
    '^@/(.*)$': '<rootDir>/src/$1', // To resolve typescript path aliases
  },

  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/results/',
  ],
});

function accessible(entry: string): boolean {
  try {
    accessSync(resolve(`${process.cwd()}/${entry}`), constants.R_OK);
    return true;
  } catch {
    return false;
  }
}

export function config(): Config.InitialOptions {
  const result: Config.InitialOptions = { ...template };
  const argv = process.argv.slice(2).reverse();

  if (argv.includes('--coverage')) {
    // Improve coverage UX by limiting the scope to the same test target

    const accessiblePaths = argv.filter(accessible);

    // Leave default behavior when no path specified (will run coverage on tested files only)
    if (accessiblePaths.length) {
      const collectCoverageFrom = ['!**/*'];

      accessiblePaths.forEach((candidate) => {
        const info = statSync(candidate);
        const clean = candidate.replace(/(\.[jt]est|\/+$)/gim, '');
        const coverage = info.isDirectory()
          ? `${clean}/**/*.{js,jsx,ts,tsx}`
          : clean;
        collectCoverageFrom.push(coverage);
      });

      collectCoverageFrom.push(...uncover);
      Object.assign(result, { collectCoverageFrom });
    }
  }

  mkdirSync(resolve(`${__dirname}/results/jest/`), { recursive: true });
  writeFileSync(
    resolve(`${__dirname}/results/jest/jest.config.json`),
    JSON.stringify(result, null, 2)
  );

  return result;
}

export default config;
