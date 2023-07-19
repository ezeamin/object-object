module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    'import/extensions': 'off', // no extensions are needed in import statements
    'react/jsx-props-no-spreading': 'off',
    'import/order': 'off', // customized order in .prettierrc
    'func-names': 'off', // disabled to allow IIFEs
    'import/no-extraneous-dependencies': 'off', // disabled to allow devDependencies
    'react/require-default-props': 'off', // deprecated check
  },
  ignorePatterns: ['node_modules/**', 'dist/**', 'config/**'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
