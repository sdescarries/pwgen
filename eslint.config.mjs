import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import typescript from 'typescript-eslint';
import { reactRefresh } from "eslint-plugin-react-refresh";

export default [
  ...typescript.configs.recommended,
  reactRefresh.configs.vite(),
  reactHooks.configs.flat.recommended,

  {

  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
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
    'indent': ['error', 2],
    'no-multi-spaces': ['error'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'ts-expect-error': 'off',
  },
}];