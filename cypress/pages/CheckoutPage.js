export class CheckoutPage {
  checkoutContainer = '.checkout_info';
  firstNameInput = '#first-name';
  lastNameInput = '#last-name';
  postalCodeInput = '#postal-code';
  continueButton = '#continue';
  cancelButton = '#cancel';
  checkoutSummary = '.checkout_summary_container';
  cartItem = '.cart_item';
  summarySubtotal = '.summary_subtotal_label';
  summaryTax = '.summary_tax_label';
  summaryTotal = '.summary_total_label';
  finishButton = '#finish';
  checkoutComplete = '.checkout_complete_container';
  completeHeader = '.complete-header';
  completeText = '.complete-text';
  backHomeButton = '#back-to-products';

  shouldBeOnCheckoutInfoPage() {
    cy.url().should('include', '/checkout-step-one.html');
    cy.get(this.checkoutContainer).should('be.visible');
  }

  fillFirstName(firstName) {
    cy.get(this.firstNameInput).clear().type(firstName);
  }

  fillLastName(lastName) {
    cy.get(this.lastNameInput).clear().type(lastName);
  }

  fillPostalCode(postalCode) {
    cy.get(this.postalCodeInput).clear().type(postalCode);
  }

  fillCheckoutForm(firstName, lastName, postalCode) {
    this.fillFirstName(firstName);
    this.fillLastName(lastName);
    this.fillPostalCode(postalCode);
  }

  clickContinue() {
    cy.get(this.continueButton).click();
  }

  clickCancel() {
    cy.get(this.cancelButton).click();
  }

  shouldBeOnCheckoutOverviewPage() {
    cy.url().should('include', '/checkout-step-two.html');
    cy.get(this.checkoutSummary).should('be.visible');
  }

  shouldDisplayCartItems(quantity) {
    cy.get(this.cartItem).should('have.length', quantity);
  }

  shouldDisplaySummaryValues() {
    cy.get(this.summarySubtotal).should('be.visible');
    cy.get(this.summaryTax).should('be.visible');
    cy.get(this.summaryTotal).should('be.visible');
  }

  clickFinish() {
    cy.get(this.finishButton).click();
  }

  shouldBeOnCheckoutCompletePage() {
    cy.url().should('include', '/checkout-complete.html');
    cy.get(this.checkoutComplete).should('be.visible');
  }

  shouldShowSuccessMessage(expectedMessage) {
    cy.get(this.completeHeader).should('be.visible').and('contain.text', expectedMessage);
  }

  shouldShowConfirmationText() {
    cy.get(this.completeText).should('be.visible');
  }

  clickBackHome() {
    cy.get(this.backHomeButton).click();
  }
}

