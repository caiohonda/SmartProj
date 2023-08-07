const cucumber = require("cypress-cucumber-preprocessor").default;
const cucumberHtmlReport = require("cypress-cucumber-html-reporter");

module.exports = (on, config) => {
  on("file:preprocessor", cucumber());

  on("task", {
    log(message) {
      console.log(message);
      return null;
    },
  });

  on("after:run", (results) => {
    cucumberHtmlReport.generate({
      jsonDir: "cypress/cucumber-json",
      reportPath: "cypress/reports/cucumber-htmlreport.html",
      openReportInBrowser: true,
      saveCollectedJSON: false,
      pageTitle: "Cypress Cucumber Test Results",
      metadata: {
        browser: {
          name: "chrome",
          version: "90",
        },
        device: "Local test machine",
        platform: {
          name: "Windows",
          version: "10",
        },
      },
    });
  });
};
