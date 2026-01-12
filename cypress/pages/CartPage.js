export class CartPage {
  cartContainer = '#cart_contents_container';
  cartList = '.cart_list';
  cartItem = '.cart_item';
  productName = '.inventory_item_name';
  productPrice = '.inventory_item_price';
  removeButton = 'button[data-test*="remove"]';
  continueShoppingButton = '#continue-shopping';
  checkoutButton = '#checkout';

  shouldBeOnCartPage() {
    cy.url().should('include', '/cart.html');
    cy.get(this.cartContainer).should('be.visible');
  }

  shouldHaveItems(quantity) {
    cy.get(this.cartItem).should('have.length', quantity);
  }

  shouldContainProduct(productName) {
    cy.get(this.cartItem).contains(this.productName, productName).should('be.visible');
  }

  getFirstProductName() {
    return cy.get(this.cartItem).first().find(this.productName).invoke('text');
  }

  getFirstProductPrice() {
    return cy.get(this.cartItem).first().find(this.productPrice).invoke('text');
  }

  removeProductByName(productName) {
    cy.get(this.cartItem)
      .contains(this.productName, productName)
      .parents(this.cartItem)
      .within(() => {
        cy.get(this.removeButton).click();
      });
  }

  clickContinueShopping() {
    cy.get(this.continueShoppingButton).click();
  }

  clickCheckout() {
    cy.get(this.checkoutButton).click();
  }
}
