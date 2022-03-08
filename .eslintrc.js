module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
    'no-restricted-globals': 'off',
    'max-len': ['error', { code: 80 }],
    'no-unused-expressions': 'off',
    'no-undef': 'off',
  },
};
