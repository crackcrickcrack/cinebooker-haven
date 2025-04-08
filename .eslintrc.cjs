const globals = require('globals');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const reactRefreshPlugin = require('eslint-plugin-react-refresh');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = {
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2020: true,
  },
  plugins: ['react-hooks', 'react-refresh', '@typescript-eslint'],
  rules: {
    ...reactHooksPlugin.configs.recommended.rules,
    // Removed invalid option `allowConstantExport`
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
