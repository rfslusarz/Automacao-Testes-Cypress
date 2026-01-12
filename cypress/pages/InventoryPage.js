export class InventoryPage {
  inventoryContainer = '.inventory_container';
  inventoryList = '.inventory_list';
  inventoryItem = '.inventory_item';
  addToCartButton = 'button[data-test*="add-to-cart"]';
  removeButton = 'button[data-test*="remove"]';
  shoppingCartBadge = '.shopping_cart_badge';
  shoppingCartLink = '.shopping_cart_link';
  productName = '.inventory_item_name';
  productPrice = '.inventory_item_price';

  shouldBeOnInventoryPage() {
    cy.url().should('include', '/inventory.html');
    cy.get(this.inventoryContainer).should('be.visible');
  }

  shouldDisplayProductList() {
    cy.get(this.inventoryList).should('be.visible');
    cy.get(this.inventoryItem).should('have.length.greaterThan', 0);
  }

  addFirstProductToCart() {
    cy.get(this.inventoryItem).first().within(() => {
      cy.get(this.addToCartButton).click();
    });
  }

  addProductToCartByName(productName) {
    cy.get(this.inventoryItem)
      .contains(this.productName, productName)
      .parents(this.inventoryItem)
      .within(() => {
        cy.get(this.addToCartButton).click();
      });
  }

  addProductToCartByIndex(index) {
    cy.get(this.inventoryItem).eq(index).within(() => {
      cy.get(this.addToCartButton).click();
    });
  }

  shouldDisplayCartBadge(quantity) {
    cy.get(this.shoppingCartBadge).should('be.visible').and('contain.text', quantity.toString());
  }

  clickShoppingCart() {
    cy.get(this.shoppingCartLink).click();
  }

  getFirstProductName() {
    return cy.get(this.inventoryItem).first().find(this.productName).invoke('text');
  }

  getFirstProductPrice() {
    return cy.get(this.inventoryItem).first().find(this.productPrice).invoke('text');
  }
}

