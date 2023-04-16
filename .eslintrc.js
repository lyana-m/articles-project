module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  overrides: [{
    files: ['*.ts', '*.tsx'],
    parserOptions: {
      project: './tsconfig.json'
    }
  }, {
    files: ['**/src/**/*.test.tsx'],
    rules: {
      'i18next/no-literal-string': 'off'
    }
  }],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'i18next'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    semi: [2, 'always']
  }
};