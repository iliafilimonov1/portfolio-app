module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "project": "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'react-hooks'
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'
    ],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'
    ],

    'no-undef': 'off',
    'react/jsx-no-undef': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'
    ],

    indent: 'off',
    '@typescript-eslint/indent': ['error',
      2,
      { SwitchCase: 1
      }
    ],

    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error'
    ],

    '@typescript-eslint/no-explicit-any': 'error',
    'no-restricted-syntax': 1,
    'spaced-comment': ['error', 'always'
    ],
    'no-underscore-dangle': 'off',

    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    'import/extensions': 'off',
    'import/prefer-default-export': 'off',

    'react-hooks/exhaustive-deps': 'warn',

    'react/destructuring-assignment': ['error', 'always'
    ],
    'react/function-component-definition': ['error',
      {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
      }
    ],
    'react/no-array-index-key': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'
    ],
    'react/jsx-indent': [
      2,
      2,
      { indentLogicalExpressions: true
      }
    ],
    'react/jsx-indent-props': [
      2,
      2
    ],
    'react/jsx-max-props-per-line': [
      1,
      { when: 'always'
      }
    ],
    'react/jsx-one-expression-per-line': ['error',
      { allow: 'single-child'
      }
    ],
    'react/jsx-pascal-case': ['error',
      { allowNamespace: true
      }
    ],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-sort-props': ['warn',
      { shorthandLast: true, reservedFirst: true
      }
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.jsx', '.tsx'
        ]
      }
    ],
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 'off',
    curly: ['error', 'all'
    ],
    'no-plusplus': 'off',
    '@typescript-eslint/member-delimiter-style': ['error'
    ],
    'no-param-reassign': ["error", { "props": true, "ignorePropertyModificationsFor": ["state", "descriptor"] }]
  },
};
