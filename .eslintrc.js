/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    // Allow annonymous class
    'max-classes-per-file': [
      'error', { 'ignoreExpressions': true },
    ],

    // Exclude ForOfStatement
    'no-restricted-syntax': [
      'error', 'ForInStatement', 'LabeledStatement', 'WithStatement',
    ],

    // Allow unused parameters for inheritance
    'no-unused-vars': [
      'error', { 'args': 'none' },
    ],
    '@typescript-eslint/no-unused-vars': 'off',

    // Allow default parameter for inferrable types
    '@typescript-eslint/no-inferrable-types': 'off',

    // Allow private constructor
    '@typescript-eslint/no-empty-function': [
      'error', { 'allow': ['private-constructors'] },
    ],

    // Fix path mapping issue
    'import/extensions': [
      'error', 'ignorePackages', { '': 'never' },
    ],

    // Disable prefer named exports
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',

    // Prefer explicit return type
    '@typescript-eslint/explicit-function-return-type': 'error',

    // Coding styles
    'padded-blocks': [
      'error', { 'classes': 'always' },
    ],
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { 'exceptAfterSingleLine': true },
    ],

    // Fix decorator and type union buggy
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        'ignoredNodes': [
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
        ],
      },
    ],

    // Extra
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
  },
};
