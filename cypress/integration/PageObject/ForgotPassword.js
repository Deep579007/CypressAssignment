export class ForgotPasswordPage {
    // Elements
    usernameInput() {
      return cy.get('input[name="username"]');
    }
  
    sendResetLinkButton() {
      return cy.get('.oxd-button--secondary');
    }
  
    successMessage() {
      return cy.contains('Reset Password link sent successfully');
    }
  
    errorMessage() {
      return cy.contains('Required');
    }
  
    cancelButton() {
      return cy.contains('Cancel');
    }
  
    // Actions
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      cy.contains('Forgot your password?').click();
    }
  
    sendResetLinkWithUsername(username) {
      this.usernameInput().type(username);
      this.sendResetLinkButton().click();
    }
  
    clickCancelButton() {
      this.cancelButton().click();
    }
  
    // Assertions
    verifySuccessMessageIsVisible() {
      this.successMessage().should('be.visible');
    }
  
    verifyErrorMessageIsVisible() {
      this.errorMessage().should('be.visible');
    }
  
    verifyCancelButtonRedirectsToLoginPage() {
      this.clickCancelButton();
      cy.url().should('include', '/auth/login');
    }
  }
  