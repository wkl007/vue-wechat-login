import globals from 'globals';
import ESLint from '@eslint/js';
import ESLintConfigPrettier from 'eslint-config-prettier';
import Vue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import prettierConfig from '@vue/eslint-config-prettier';

export default [
  {
    ignores: ['**/public/*', '**/dist/*'],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  ESLint.configs.recommended,
  ESLintConfigPrettier,
  ...Vue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  prettierConfig,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
];
