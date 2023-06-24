const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
//test
module.exports = defineConfig({
  screenshotOnRunFailure: true,
  video: true,
  trashAssetsBeforeRuns: true,
  pageLoadTimeout: 30000,
  execTimeout: 40,
  defaultCommandTimeout: 900,
  downloadsFolder: './cypress/downloads',
  screenshotsFolder: './cypress/screenshots',
  retries: 1,
  env:
  {
    filePath: "cypress/fixtures/test.csv",
    data: ''
  },
  e2e: {
    
    baseUrl: "https://demoqa.com/alerts",
    setupNodeEvents(on, config) {
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", browserify.default(config));
      allureWriter(on, config);
       return config
      // implem
      //ent node event listeners here
    },
    specPattern: "cypress/e2e/Features/*.feature",
    
  },
});
