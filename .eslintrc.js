/** @format */

const { getESLintConfig } = require('@iceworks/spec');

module.exports = getESLintConfig('react-ts', {
  rules: {
    'react/jsx-filename-extension': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'arrow-parens': 0,
    '@typescript-eslint/no-invalid-void-type': 0,
    '@typescript-eslint/no-shadow': 0,
    'function-paren-newline': 0,
    'no-confusing-arrow': 0,
  },
});
