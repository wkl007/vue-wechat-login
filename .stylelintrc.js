module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order'
  ],
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'selector-pseudo-class-no-unknown': null,
    'no-descending-specificity': null,
    'at-rule-no-unknown': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-no-unknown': null
  }
}
