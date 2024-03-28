// /**
//  *
//  * @type {import("@arietta-studio/arietta-i18n").Config}
//  */
// module.exports = {
//   markdown: {
//     entry: ['src/locales/*.json'],
//     // entry: ['example/**/*.md', 'README.md'],
//     entryLocale: 'en-US',
//     exclude: ['changelog.md'],
//     outputLocales: ['lt-LT'],
//     outputExtensions: (locale, { getDefaultExtension }) => {
//       if (locale === 'en-US') return '.md';
//       return getDefaultExtension(locale);
//     },
//   },
//   modelName: 'gpt-4-1106-preview',
// };
const { defineConfig } = require('@arietta-studio/arietta-i18n');

module.exports = defineConfig({
  entry: 'src/locales/en-US.json',
  entryLocale: 'en-US',
  output: 'src/locales',
  outputLocales: ['lt-LT'],
});
