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
  plugins: ['react', 'i18next', 'react-hooks', 'eslint-plugin-test-path-checker'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['src', 'node_modules']
      }
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
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/consistent-type-exports': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    semi: [2, 'always'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'multiline-ternary': 'off',
    'n/no-callback-literal': 'off',
    // 'eslint-plugin-react/boolean-prop-naming': 'error'
    // 'eslint-plugin-path-checker/chech-paths-in-module': 'error'
    // 'test-path-checker/avoid-name': 'error'
    'test-path-checker/relative-path': 'error'
    // 'ulbi-tv-plugin/path-checker': 'error'
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true
  }
};
