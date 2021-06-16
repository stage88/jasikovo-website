module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  extends: ['xo-space/esnext', 'xo-react/space', 'xo-typescript'],
  rules: {
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'capitalized-comments': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-tag-spacing': 'off',
    'react/prop-types': 'off',
    'no-warning-comments': 'off',
    'complexity': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off'
  },
};
