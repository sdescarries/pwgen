module.exports = {
  env: {
    browser: true, // enable use of global browser variables like `windows`.
    es6: true, // enable ES2015 features.
    node: true, // enable use of global node variables like `process`.
  },
  extends: [
    'eslint:recommended', // Eslint recommended configuration by eslint.
    'plugin:import/recommended', // Linting of ES2015+ import/export syntax.
    'plugin:react/recommended', // Recommended react linting configs.
    'plugin:react-hooks/recommended', // Recommended react hooks linting configs.
    'plugin:jsx-a11y/recommended', // Turns on a11y rules for JSX.
    'plugin:@typescript-eslint/recommended', // Turns on rules from TypeScript-specific plugin.
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // Turns on rules from TypeScript-specific plugin.
  ],
  overrides: [
    {
      env: {
        'jest/globals': true, // enable Jest global variables.
      },
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
      files: [
        'src/**/__mocks__/**/*.[jt]s?(x)',
        'src/**/__tests__/**/*.[jt]s?(x)',
        'src/**/?(*.)+(spec|test).[jt]s?(x)',
      ], // Override config for same files pattern as jest `testMatch` default value
      plugins: ['jest', 'jest-dom', 'testing-library'],
      rules: {
        'jest-dom/prefer-checked': 'error',
        'jest-dom/prefer-enabled-disabled': 'error',
        'jest-dom/prefer-required': 'error',
        'jest-dom/prefer-to-have-attribute': 'error',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'testing-library/no-debugging-utils': 'warn',
        'testing-library/no-dom-import': 'off',
        'ts-expect-error': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser', // Allows Eslint to understand TypeScript syntax.
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // enable jsx for React.
    },
    ecmaVersion: 2021, // ECMAScript version supported in the project.
    project: 'tsconfig.json', // Tells Eslint where to find the root tsconfig file of your project.
    sourceType: 'module', // set to `module` because we ue ECMAScript modules.
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    'simple-import-sort', // Plugin for sorting imports in file.
  ],
  root: true,
  rules: {
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'error',
    'indent': ['error', 2],
    'no-multi-spaces': ['error'],
    'quotes': ['error', 'single'],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'semi': ['error', 'always'],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'], // use typescript-eslint parser for .ts|tsx files.
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn"t contain any source code, like `@types/unist`.
      },
    },
    react: {
      version: 'detect', // auto-detect React version from package.json.
    },
  },
};
