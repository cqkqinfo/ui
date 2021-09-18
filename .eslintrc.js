module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/consistent-type-assertions': 0,
    'import/no-anonymous-default-export': 'off',
    'react-hooks/rules-of-hooks': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  }
};
