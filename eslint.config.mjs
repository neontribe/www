// eslint.config.mjs (ESLint v9+ flat config)
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lets you keep using legacy "extends", "plugins", "env", etc.
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    // 🔹 Ignore these directories
    ignores: [
      '.yarn',
      '.cache',
      'build',
      'coverage',
      'node_modules',
      'public',
      'static',
    ],
  },
  // Base ESLint recommended (replaces "eslint:recommended")
  js.configs.recommended,

  // Convert your old .eslintrc config to flat config entries
  ...compat.config({
    root: true,
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      // These are legacy shareable configs; FlatCompat makes them work in v9
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:jest-dom/recommended',
    ],
    plugins: [
      'react',
      'react-hooks',
      'jsx-a11y',
      'jest-dom',
    ],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],
    },
    overrides: [
      {
        files: ['**/?(*.)+(test).[jt]s?(x)'],
        env: { jest: true },
      },
    ],
  }),
];
