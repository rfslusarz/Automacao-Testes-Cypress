const js = require('@eslint/js');
const cypressPlugin = require('eslint-plugin-cypress');

module.exports = [
  {
    ignores: ['node_modules/', 'allure-results/', 'allure-report/']
  },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        cy: 'readonly',
        Cypress: 'readonly',
        window: 'readonly',
        document: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly'
      }
    },
    plugins: {
      cypress: cypressPlugin
    },
    rules: {}
  },
  {
    files: ['cypress.config.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'readonly'
      }
    }
  }
];
