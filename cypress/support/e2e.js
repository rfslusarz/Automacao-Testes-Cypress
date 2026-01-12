import './commands';
import '@shelex/cypress-allure-plugin';

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

afterEach(() => {
  if (Cypress.currentTest && Cypress.currentTest.state === 'failed') {
    cy.screenshot();
  }
});

