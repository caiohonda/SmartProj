import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { expect } from "chai";

let createdUserId; // Global variable to store the created user's ID

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

When("I store the value of property {string} as {string}", (property, variableName) => {
  cy.get("@response").its("body").its(property).as(variableName);
});

When("I send a DELETE request to {string}", (endpoint) => {
  // Use the stored createdUserId for the DELETE request
  cy.request("DELETE", endpoint.replace("{id}", cy.get("@createdUserId"))).as("response");
});

When("I store the created user's ID", () => {
  cy.get("@response").its("body.id").then((id) => {
    createdUserId = id; // Store the created user's ID in the global variable
  });
});