class LoginPage {
    visit() {
      cy.visit(Cypress.env('baseUrl_FRONT'));
    }
  
    typeEmail(userID = Cypress.env('qa_usr')) {
      cy.get("#user-name").type(userID);
    }
  
    typePassword(password = Cypress.env('qa_psw')) {
      cy.get("#password").type(password);
    }
  
    clickSignIn() {
      cy.get("#login-button").click();
    }
  
    verifySuccessfulLogin() {
      cy.url().should("include", "/inventory.html");
    }
  
    verifyErrorMessage() {
      cy.get(".alert-danger").should("be.visible");
    }
  }
  
  export default new LoginPage();
  