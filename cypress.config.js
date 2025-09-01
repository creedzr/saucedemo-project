// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
    specPattern: 'cypress/integration/**/*.{cy,spec,test}.js',

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      embeddedScreenshots: true,
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});