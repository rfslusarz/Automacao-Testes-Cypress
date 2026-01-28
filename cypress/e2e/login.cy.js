import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

describe('Login - SauceDemo', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  beforeEach(() => {
    cy.allure().feature('Login').epic('Autenticação').owner('QA');
    loginPage.visit();
  });

  describe('Login com sucesso', () => {
    it('deve realizar login com credenciais válidas e redirecionar para a página de inventário', () => {
      cy.allure().severity('critical').story('Login válido');
      const username = Cypress.env('SAUCE_USERNAME') || 'standard_user';
      const password = Cypress.env('SAUCE_PASSWORD') || 'secret_sauce';

      loginPage.login(username, password);

      inventoryPage.shouldBeOnInventoryPage();
      inventoryPage.shouldDisplayProductList();
    });

    it('deve realizar login usando fixture e exibir lista de produtos', () => {
      cy.fixture('users').then((users) => {
        loginPage.login(users.validUser.username, users.validUser.password);

        inventoryPage.shouldBeOnInventoryPage();
        inventoryPage.shouldDisplayProductList();
      });
    });
  });

  describe('Login inválido', () => {
    it('deve exibir mensagem de erro ao usar usuário válido com senha inválida', () => {
      cy.allure().severity('normal').story('Senha inválida');
      const invalidCredentials = {
        username: 'standard_user',
        password: 'wrong_password',
      };
      const expectedErrorMessage =
        'Epic sadface: Username and password do not match any user in this service';

      loginPage.login(invalidCredentials.username, invalidCredentials.password);

      loginPage.shouldShowErrorMessage(expectedErrorMessage);
    });

    it('deve exibir mensagem de erro ao usar usuário inválido com senha válida', () => {
      cy.allure().severity('normal').story('Usuário inválido');
      const invalidCredentials = {
        username: 'invalid_user',
        password: 'secret_sauce',
      };
      const expectedErrorMessage =
        'Epic sadface: Username and password do not match any user in this service';

      loginPage.login(invalidCredentials.username, invalidCredentials.password);

      loginPage.shouldShowErrorMessage(expectedErrorMessage);
    });

    it('deve exibir mensagem de erro usando fixture com credenciais inválidas', () => {
      cy.allure().severity('minor').story('Fixture inválida');
      const expectedErrorMessage =
        'Epic sadface: Username and password do not match any user in this service';

      cy.fixture('users').then((users) => {
        loginPage.login(users.invalidUser.username, users.invalidUser.password);
        loginPage.shouldShowErrorMessage(expectedErrorMessage);
      });
    });
  });

  describe('Login com campos em branco', () => {
    it('deve exibir mensagem de erro quando o campo de usuário está em branco', () => {
      cy.allure().severity('trivial').story('Usuário em branco');
      const expectedErrorMessage = 'Epic sadface: Username is required';

      loginPage.fillPassword('secret_sauce');
      loginPage.clickLogin();

      loginPage.shouldShowErrorMessage(expectedErrorMessage);
    });

    it('deve exibir mensagem de erro quando o campo de senha está em branco', () => {
      cy.allure().severity('trivial').story('Senha em branco');
      const expectedErrorMessage = 'Epic sadface: Password is required';

      loginPage.fillUsername('standard_user');
      loginPage.clickLogin();

      loginPage.shouldShowErrorMessage(expectedErrorMessage);
    });

    it('deve exibir mensagem de erro quando ambos os campos estão em branco', () => {
      cy.allure().severity('trivial').story('Ambos em branco');
      const expectedErrorMessage = 'Epic sadface: Username is required';

      loginPage.clickLogin();

      loginPage.shouldShowErrorMessage(expectedErrorMessage);
    });
  });
});
