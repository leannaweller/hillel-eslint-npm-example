module.exports = {
  extends: ['prettier', 'airbnb'],
  plugins: ['prettier'],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 2,
    semi: 2,
    'prefer-const': 2,
    'no-underscore-dangle': 2,
  },
};
