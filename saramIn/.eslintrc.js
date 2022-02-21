module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prettier'],
  rules: {
    quotes: ['error', 'single'],
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
  },
};
