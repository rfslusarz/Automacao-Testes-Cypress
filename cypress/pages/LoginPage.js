export class LoginPage {
  usernameInput = '#user-name';
  passwordInput = '#password';
  loginButton = '#login-button';
  errorMessage = '[data-test="error"]';

  visit() {
    cy.visit('/');
  }

  fillUsername(username) {
    cy.get(this.usernameInput).clear().type(username);
  }

  fillPassword(password) {
    cy.get(this.passwordInput).clear().type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLogin();
  }

  shouldShowErrorMessage(expectedMessage) {
    cy.get(this.errorMessage).should('be.visible').and('contain.text', expectedMessage);
  }

  shouldHaveEmptyUsername() {
    cy.get(this.usernameInput).should('have.value', '');
  }

  shouldHaveEmptyPassword() {
    cy.get(this.passwordInput).should('have.value', '');
  }

  shouldHaveDisabledLoginButton() {
    cy.get(this.loginButton).should('be.disabled');
  }

  shouldHaveEnabledLoginButton() {
    cy.get(this.loginButton).should('be.enabled');
  }
}

