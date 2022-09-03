module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  ignorePatterns: ["src/resume.ts"],
  rules: {
    'import/prefer-default-export': 0,
    'no-useless-constructor': 'off',
    'no-use-before-define': 0,
    'no-shadow': 'off',
    'react/prop-types': 0,
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    // 'import/no-extraneous-dependencies': 0,
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],
    'max-len': ['error', { code: 80 }],
    'newline-before-return': 'error',
    'react/require-default-props': 'off',
  },
};
