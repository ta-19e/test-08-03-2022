module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'max-len': [1, { code: 98 }],
    'no-console': ['off'],
    'no-restricted-globals': ['off'],
    'no-undef': ['off'],
    semi: [2, 'never'],
  },
}
