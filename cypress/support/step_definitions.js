import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { expect } from "chai";

Given("I set the request body as:", (requestBody) => {
  cy.wrap(requestBody).as("requestBody");
});

When("I send a {string} request to {string}", (method, endpoint) => {
  cy.request({
    method,
    url: endpoint,
    body: cy.get("@requestBody"),
  }).as("response");
});

Then("the response status should be {int}", (statusCode) => {
  cy.get("@response").its("status").should("equal", statusCode);
});

Then("the response body should have property {string} with value {string}", (property, value) => {
  cy.get("@response").its("body").should("have.property", property).and("equal", value);
});
