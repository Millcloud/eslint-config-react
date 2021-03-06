module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['eslint:recommended', 'airbnb', 'airbnb/hooks'],
  env: {
    browser: true,
    es2020: true,
    jest: true,
    mocha: true,
    node: true,
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-console':
      process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'pre-production' ||
      process.env.NODE_ENV === 'staging'
        ? 'warn'
        : 'off',
    'no-debugger':
      process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'pre-production' ||
      process.env.NODE_ENV === 'staging'
        ? 'warn'
        : 'off',
    'no-unused-vars':
      process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'pre-production' ||
      process.env.NODE_ENV === 'staging'
        ? [
            'warn',
            {
              vars: 'all',
              varsIgnorePattern: '(React|Taro)',
              args: 'after-used',
              ignoreRestSiblings: true,
            },
          ]
        : 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'onLaunch',
            'onReady',
            'onLoad',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentDidShow',
            'componentDidHide',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatchError',
            'componentDidNotFound',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'airbnb-typescript',
        'airbnb/hooks',
      ],
      rules: {
        '@typescript-eslint/no-console':
          process.env.NODE_ENV === 'production' ||
          process.env.NODE_ENV === 'pre-production' ||
          process.env.NODE_ENV === 'staging'
            ? 'warn'
            : 'off',
        '@typescript-eslint/no-debugger':
          process.env.NODE_ENV === 'production' ||
          process.env.NODE_ENV === 'pre-production' ||
          process.env.NODE_ENV === 'staging'
            ? 'warn'
            : 'off',
        '@typescript-eslint/no-unused-vars':
          process.env.NODE_ENV === 'production' ||
          process.env.NODE_ENV === 'pre-production' ||
          process.env.NODE_ENV === 'staging'
            ? [
                'warn',
                {
                  vars: 'all',
                  varsIgnorePattern: '(React|Taro)',
                  args: 'after-used',
                  ignoreRestSiblings: true,
                },
              ]
            : 'off',
        'class-methods-use-this': 'off',
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'react/sort-comp': [
          'error',
          {
            order: [
              'static-variables',
              'static-methods',
              'instance-variables',
              'lifecycle',
              '/^on.+$/',
              'getters',
              'setters',
              '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
              'instance-methods',
              'everything-else',
              'rendering',
            ],
            groups: {
              lifecycle: [
                'displayName',
                'propTypes',
                'contextTypes',
                'childContextTypes',
                'mixins',
                'statics',
                'defaultProps',
                'constructor',
                'getDefaultProps',
                'getInitialState',
                'state',
                'getChildContext',
                'getDerivedStateFromProps',
                'onLaunch',
                'onReady',
                'onLoad',
                'componentWillMount',
                'UNSAFE_componentWillMount',
                'componentDidMount',
                'componentDidShow',
                'componentDidHide',
                'componentWillReceiveProps',
                'UNSAFE_componentWillReceiveProps',
                'shouldComponentUpdate',
                'componentWillUpdate',
                'UNSAFE_componentWillUpdate',
                'getSnapshotBeforeUpdate',
                'componentDidUpdate',
                'componentDidCatchError',
                'componentDidNotFound',
                'componentWillUnmount',
              ],
              rendering: ['/^render.+$/', 'render'],
            },
          },
        ],
      },
    },
  ],
};
