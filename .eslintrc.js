module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@vue/prettier',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/vue',
    '@vue/airbnb',
    'eslint:recommended',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.config.js', 'tailwind*', '**/*.test.js', '**/*.spec.js'] },
    ],
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all', printWidth: 100 }],
    'function-paren-newline': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex mutations
          'acc', // for reduce accumulators
          'request', // for axios interceptors
        ],
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
