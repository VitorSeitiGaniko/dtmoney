module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended', // Adicione esta linha
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react'],
  rules: {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'indent': ['warn', 2],
    'no-unused-vars': 'warn', // Avisa sobre variáveis declaradas e não utilizadas
    'react/jsx-one-expression-per-line': ['warn', { allow: 'single-child' }],
    'react/jsx-tag-spacing': ['error', { closingSlash: 'never', beforeSelfClosing: 'allow', afterOpening: 'never', beforeClosing: 'never' }],
  },
  settings: {
    react: {
      version: "18.2.0" // Isso irá detectar automaticamente a versão do React
    }
  },
}
