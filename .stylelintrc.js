const config = require('@arietta-studio/lint').stylelint;

module.exports = {
  ...config,
  rules: {
    'custom-property-pattern': null,
    'selector-pseudo-element-no-unknown': null,
  },
};
