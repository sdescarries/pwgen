import globals from 'globals';
import jest from 'eslint-plugin-jest';
import jestDom from 'eslint-plugin-jest-dom';
import js from '@eslint/js';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import testingLibrary from 'eslint-plugin-testing-library';
import typescript from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...typescript.configs.recommended,
  jest.configs['flat/recommended'],
  jsxA11Y.flatConfigs.recommended,
  react.configs.flat['jsx-runtime'],
  testingLibrary.configs['flat/react'],
  {

  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...jest.environments.globals.globals,
    },

      ecmaVersion: 2022,
      sourceType: 'module',

    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },

  files: [
    'src/**/__mocks__/**/*.[jt]s?(x)',
    'src/**/__tests__/**/*.[jt]s?(x)',
    'src/**/?(*.)+(spec|test).[jt]s?(x)',
  ],

  plugins: {
    'jest': jest,
    'jest-dom': jestDom,
    'testing-library': testingLibrary,
    "simple-import-sort": simpleImportSort,
  },

  ignores: [
    // Incompatible project files
    '*.json',
    '/*.js',
    '/*.ts',

    // Build artifacts:
    '/build/',
    '/coverage/',
    '/dist/',
    '/node_modules/',
    '/results/',
  ],

  rules: {
    // 'import/first': 'error',
    // 'import/newline-after-import': 'error',
    // 'import/no-duplicates': 'error',
    // 'import/no-named-as-default-member': 'off',
    // 'import/no-unresolved': 'error',
    'indent': ['error', 2],
    'jest-dom/prefer-checked': 'error',
    'jest-dom/prefer-enabled-disabled': 'error',
    'jest-dom/prefer-required': 'error',
    'jest-dom/prefer-to-have-attribute': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'no-multi-spaces': ['error'],
    'quotes': ['error', 'single'],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'semi': ['error', 'always'],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off',
    'ts-expect-error': 'off',
  },
}];