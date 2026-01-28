import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

describe('E2E - Fluxo completo de compra', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    cy.allure().feature('Checkout').epic('Compra').owner('QA');
    loginPage.visit();
    const username = Cypress.env('SAUCE_USERNAME') || 'standard_user';
    const password = Cypress.env('SAUCE_PASSWORD') || 'secret_sauce';
    loginPage.login(username, password);
    inventoryPage.shouldBeOnInventoryPage();
  });

  it('deve completar o fluxo completo de compra com sucesso', () => {
    cy.allure().severity('critical').story('Fluxo simples com 1 item');
    const checkoutData = {
      firstName: 'João',
      lastName: 'Silva',
      postalCode: '12345-678',
    };
    const expectedSuccessMessage = 'Thank you for your order!';

    inventoryPage.addFirstProductToCart();
    inventoryPage.shouldDisplayCartBadge(1);

    inventoryPage.clickShoppingCart();
    cartPage.shouldBeOnCartPage();
    cartPage.shouldHaveItems(1);

    cartPage.clickCheckout();
    checkoutPage.shouldBeOnCheckoutInfoPage();

    checkoutPage.fillCheckoutForm(
      checkoutData.firstName,
      checkoutData.lastName,
      checkoutData.postalCode
    );
    checkoutPage.clickContinue();

    checkoutPage.shouldBeOnCheckoutOverviewPage();
    checkoutPage.shouldDisplayCartItems(1);
    checkoutPage.shouldDisplaySummaryValues();
    checkoutPage.clickFinish();

    checkoutPage.shouldBeOnCheckoutCompletePage();
    checkoutPage.shouldShowSuccessMessage(expectedSuccessMessage);
    checkoutPage.shouldShowConfirmationText();
  });

  it('deve completar o fluxo de compra com múltiplos produtos', () => {
    cy.allure().severity('normal').story('Fluxo com múltiplos itens');
    const checkoutData = {
      firstName: 'Maria',
      lastName: 'Santos',
      postalCode: '98765-432',
    };
    const expectedSuccessMessage = 'Thank you for your order!';

    inventoryPage.addProductToCartByIndex(0);
    inventoryPage.addProductToCartByIndex(1);
    inventoryPage.shouldDisplayCartBadge(2);

    inventoryPage.clickShoppingCart();
    cartPage.shouldBeOnCartPage();
    cartPage.shouldHaveItems(2);

    cartPage.clickCheckout();
    checkoutPage.shouldBeOnCheckoutInfoPage();

    checkoutPage.fillCheckoutForm(
      checkoutData.firstName,
      checkoutData.lastName,
      checkoutData.postalCode
    );
    checkoutPage.clickContinue();

    checkoutPage.shouldBeOnCheckoutOverviewPage();
    checkoutPage.shouldDisplayCartItems(2);
    checkoutPage.shouldDisplaySummaryValues();
    checkoutPage.clickFinish();

    checkoutPage.shouldBeOnCheckoutCompletePage();
    checkoutPage.shouldShowSuccessMessage(expectedSuccessMessage);
  });
});
