module.exports = {
  root: true,
  extends: [
    'next',
    'prettier',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    'unused-imports',
    'simple-import-sort',
  ],
  rules: {
    'prefer-const': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'simple-import-sort/imports': 'error',
    'tailwindcss/enforces-negative-arbitrary-values': 'off',
    'simple-import-sort/exports': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
  },
  settings: {
    tailwindcss: {
      config: './tailwind.config.js',
    },
    next: {
      rootDir: true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
};
