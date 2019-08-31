const pattern = '^_*[a-z]+\\d*(?:[A-Z][a-z]+\\d*)*$' // _*camelCasea

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    // see: https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md
    'at-rule-no-unknown': null,
    'at-rule-blacklist': ['debug'],
    'at-rule-no-vendor-prefix': true,
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-blockless'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else'],
      },
    ],
    'font-family-no-missing-generic-family-keyword': null,
    'max-nesting-depth': [
      3,
      {
        ignore: ['blockless-at-rules', 'pseudo-classes'],
      },
    ],
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-max-id': 0,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local'],
      },
    ],
    // class选择器名约束:selector-class-pattern 呃,不能区分是否CSS Modules
    'string-quotes': 'single',
    'selector-no-vendor-prefix': true,
    'selector-no-qualifying-type': true,
    'selector-max-compound-selectors': 3,
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': true,
    // see: https://github.com/kristerkari/stylelint-scss#list-of-rules
    'scss/at-rule-no-unknown': true,
    'scss/at-mixin-pattern': pattern,
    'scss/at-function-pattern': pattern,
    'scss/at-else-empty-line-before': 'never',
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/dollar-variable-pattern': pattern,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/percent-placeholder-pattern': pattern,
    'scss/selector-no-redundant-nesting-selector': true,
    // see: https://github.com/hudochenkov/stylelint-order#list-of-rules
    'order/order': [
      'custom-properties',
      'dollar-variables',
      {
        type: 'at-rule',
        name: 'extend',
      },
      {
        type: 'at-rule',
        name: 'include',
        hasBlock: false,
      },
      'declarations',
      {
        type: 'at-rule',
        name: 'include',
        hasBlock: true,
      },
      'rules',
    ],
  },
}
