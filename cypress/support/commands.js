Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');
  cy.get('#user-name').clear().type(username);
  cy.get('#password').clear().type(password);
  cy.get('#login-button').click();
});

Cypress.Commands.add('loginWithFixture', (userType) => {
  cy.fixture('users').then((users) => {
    const user = users[userType];
    if (user) {
      cy.login(user.username, user.password);
    } else {
      throw new Error(`Tipo de usuário "${userType}" não encontrado no fixture`);
    }
  });
});

