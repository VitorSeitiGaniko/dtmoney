import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';


export default [
  {
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: '18.2.0', // Isso irá detectar automaticamente a versão do React
      },
    },

    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['warn', 2],
      'no-unused-vars': 'warn', // Avisa sobre variáveis declaradas e não utilizadas
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];