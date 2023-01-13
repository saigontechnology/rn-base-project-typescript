module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'import/no-cycle': 'warn',
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'arrow-body-style': ['error', 'always'],
        '@typescript-eslint/no-empty-interface': 'warn'
      },
    },
  ],
}
