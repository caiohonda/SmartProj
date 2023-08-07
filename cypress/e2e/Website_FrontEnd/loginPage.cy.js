import LoginPage from "../../support/PageObject/LoginPage";

describe('Login Page', () => {

  beforeEach(() => {
    // Visit the login page before each test
    LoginPage.visit();
  })

  it('should login with valid credentials', () => {
    // Enter valid credentials and click login
    LoginPage.typeEmail();
    LoginPage.typePassword();
    LoginPage.clickSignIn();
    cy.wait(5000)
    // Assert successful login
    LoginPage.verifySuccessfulLogin();
  });

  it('should show error for invalid username', () => {
    // Enter valid credentials and click login
    LoginPage.typeEmail(Cypress.env('invalidUsr'));
    LoginPage.typePassword();
    LoginPage.clickSignIn();
    cy.wait(5000)
    // Assert successful login
    LoginPage.verifyErrorMessage();
  });

  it('should show error for invalid password', () => {
    // Enter valid credentials and click login
    LoginPage.typeEmail();
    LoginPage.typePassword(Cypress.env('invalidPsw'));
    LoginPage.clickSignIn();
    cy.wait(5000)
    // Assert successful login
    LoginPage.verifyErrorMessage();
  });

  it('should show error for both blank username and password', () => {
    // Enter valid credentials and click login
    LoginPage.typeEmail("");
    LoginPage.typePassword("");
    LoginPage.clickSignIn();
    cy.wait(5000)
    // Assert successful login
    LoginPage.verifyErrorMessage();
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
  // Your custom handling for uncaught exceptions
  // For example, you can log the error or take specific actions based on the error type.
  // You can also prevent Cypress from failing the test by returning false here.

  // For demonstration purposes, let's log the error to the console.
  console.error('Uncaught Exception:', err.message);

  // Returning false here prevents Cypress from failing the test due to the uncaught exception.
  return false;
  });

})

