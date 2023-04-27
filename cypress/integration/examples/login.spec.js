// Login page

import LoginPage from '../PageObject/Login';
import { ForgotPasswordPage } from '../PageObject/ForgotPassword';


describe('Login page', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('Positive login with valid credentials', () => {
    LoginPage.loginWithValidCredentials();
    cy.url().should('include', '/dashboard');
  });

  it('Negative login with invalid username', () => {
    LoginPage.loginWithInvalidUsername();
    LoginPage.errorMessage.should('be.visible');
  });

  it('Negative login with invalid password', () => {
    LoginPage.loginWithInvalidPassword();
    LoginPage.errorMessage.should('be.visible');
  });

  it('Negative login with blank credentials', () => {
    LoginPage.loginWithBlankCredentials();
    LoginPage.usernameInput.should('have.css', 'border-color', 'rgb(235, 9, 16)');
    LoginPage.passwordInput.should('have.css', 'border-color', 'rgb(235, 9, 16)');
    cy.contains('Required').should('be.visible');
  });
});



describe('Forgot Password page', function() {
  const validUsername = 'Admin';
  const invalidUsername = '#@$wesa';
  const page = new ForgotPasswordPage();

  beforeEach(function() {
    page.visit();
  });

  it('Forgot password with valid username', function() {
    page.sendResetLinkWithUsername(validUsername);
    page.verifySuccessMessageIsVisible();
  });

  it('Forgot password with invalid username', function() {
    page.sendResetLinkWithUsername(invalidUsername);
    page.verifySuccessMessageIsVisible();
  });

  it('Forgot password with blank username', function() {
    page.sendResetLinkButton().click();
    page.verifyErrorMessageIsVisible();
  });

  it('Clicking on Cancel button', function() {
    page.verifyCancelButtonRedirectsToLoginPage();
  });
});






