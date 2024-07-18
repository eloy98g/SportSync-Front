// ----------------------------------- ATTENTION -----------------------------------
// Please dont disable any of the following rules without good reason.
// These rules have been put in place to ensure code quality and consistency.
// If you came here to disable a rule then that could mean that your code could be improved.
// Please talk to your teammates and discuss the issue before disabling a rule.

module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native-a11y/all',
    'prettier',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'check-file',
    'function-name',
    'react',
  ],
  ignorePatterns: [
    '*.json',
    '.eslintrc.js',
    'node_modules/',
    '*.config.js',
    'tailwind.ts',
    'coverage/',
  ],
  rules: {
    'react-native/no-inline-styles': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'block-like',
          'function',
          'iife',
          'multiline-const',
          'multiline-let',
          'try',
        ],
      },
      {
        blankLine: 'always',
        prev: [
          'block-like',
          'function',
          'iife',
          'multiline-const',
          'multiline-let',
          'try',
        ],
        next: '*',
      },
    ],
    'max-nested-callbacks': ['error', 3],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'valid-typeof': 'error',
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'comma-style': ['error', 'last'],
    eqeqeq: 'error',
    // Rule: https://eslint.org/docs/latest/rules/max-params
    // If you need to pass more than 2 params then pass an object instead
    'max-params': ['error', 2], // helps readability
    // Rule: https://github.com/legend80s/eslint-plugin-function-name
    'function-name/starts-with-verb': 'error',
    // Rule: https://typescript-eslint.io/rules/no-shadow/
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    // Rule: https://typescript-eslint.io/rules/naming-convention/
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'uses'],
      },
      {
        selector: 'variable',
        types: ['function'],
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        types: ['string', 'number', 'array'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
      },
    ],
    'react/jsx-newline': ['error', { prevent: false }],
    'react/no-unstable-nested-components': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/destructuring-assignment': [
      'error',
      'always',
      { ignoreClassFields: true, destructureInSignature: 'always' },
    ],
    'react/jsx-no-leaked-render': [
      'error',
      { validStrategies: ['ternary', 'coerce'] },
    ],
    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: false },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
      },
    ],
    // Rule: https://eslint.org/docs/latest/rules/max-lines
    'max-lines': ['error', 500], // keep files small
    // if you are importing more then one level deep then you should probably refactor your code or do absolute imports
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../../*'],
      },
    ],
    'no-nested-ternary': 'error', // helps readability
    'max-depth': ['error', 3], // deeply nested code is hard to read and understand
    curly: 'error',
    'no-lone-blocks': ['error'],
    'no-lonely-if': 'error', // if this rule is throwing errors then you should probably refactor your code
    'no-else-return': [
      'error',
      {
        allowElseIf: false,
      },
    ],
    'spaced-comment': ['error', 'always'],
    'space-before-blocks': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    // turn on errors for missing imports
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Built-in imports (come from NodeJS native) go first
          'external', // <- External imports
          'internal', // <- Absolute imports
          ['sibling', 'parent'], // <- Relative imports, the sibling and parent types they can be mingled together
          'index', // <- index imports
          'unknown', // <- unknown
        ],
        'newlines-between': 'always',
        alphabetize: {
          /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
};
