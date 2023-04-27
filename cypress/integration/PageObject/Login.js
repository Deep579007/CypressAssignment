class LoginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  }

  get usernameInput() {
    return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input');
  }

  get passwordInput() {
    return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input');
  }

  get loginButton() {
    return cy.get('.oxd-button');
  }

  get errorMessage() {
    return cy.contains('Invalid credentials');
  }

  fillCredentials(username, password) {
    this.usernameInput.type(username);
    this.passwordInput.type(password);
    return this;
  }

  clickLoginButton() {
    this.loginButton.click();
    return this;
  }

  loginWithValidCredentials() {
    this.fillCredentials('Admin', 'admin123');
    this.clickLoginButton();
    return this;
  }

  loginWithInvalidUsername() {
    this.fillCredentials('Deepak', 'admin123');
    this.clickLoginButton();
    return this;
  }

  loginWithInvalidPassword() {
    this.fillCredentials('Admin', 'acbc1234');
    this.clickLoginButton();
    return this;
  }

  loginWithBlankCredentials() {
    this.clickLoginButton();
    return this;
  }
}

export default new LoginPage();



