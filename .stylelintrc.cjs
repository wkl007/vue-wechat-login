module.exports = {
  extends: [
    'stylelint-config-rational-order',
    'stylelint-config-html',
    'stylelint-config-recommended-vue',
  ],
  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
    },
  ],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'selector-pseudo-class-no-unknown': null,
    'no-descending-specificity': null,
    'at-rule-no-unknown': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-no-unknown': null,
  },
};
