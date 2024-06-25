describe('template spec', () => {
  it('Create product', () => {
      cy.visit('http://localhost:3000/login');
      cy.get('[data-cy=e2e-email-field-login]').type('tiagoluizrs@gmail.com');
      cy.get('[data-cy=e2e-password-field-login]').type('123456');
      cy.get('[data-cy=e2e-button-login] > div').click();
      cy.get('[data-cy=e2e-button-menu]').click();
      cy.wait(2000);
      cy.get('[data-cy=e2e-menu-item-top-1]').click();
      cy.get('[data-cy=e2e-button-add-product]').click();
      cy.get('[data-cy=e2e-product-name]').type('Produto teste E2E');
      cy.get('[data-cy=e2e-product-description]').type('Produto teste E2E descrição');
      cy.get('[data-cy=e2e-product-price]').type('199.99');
      cy.get('[data-cy=e2e-product-quantity]').type('10');
      cy.get('[data-cy=e2e-button-product-add] > div').click();
  });
})