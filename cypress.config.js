const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = {
  ...(on, config) => {
    // Add custom tasks for Allure reporting
    on("task", allureWriter);

    // Configure browsers (you can choose other browsers if desired)
    config.browsers = {
      chrome: true,
    };

    // Set the path to your e2e test files
    config.integrationFolder = "cypress/e2e";

    // Configure Allure reporter options
    config.reporterOptions = {
      allure: {
        outputDir: "allure-results", // Specify the folder where Allure results will be stored
      },
    };

    // Add any other Cypress configuration options you need

    return config;
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
