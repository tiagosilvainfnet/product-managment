describe('template spec', () => {
  it('User not exist', () => {
      cy.visit('http://localhost:3000/login');
      cy.get('[data-cy=e2e-email-field-login]').type('tiago@gmail.com');
      cy.get('[data-cy=e2e-password-field-login]').type('123456');
      cy.get('[data-cy=e2e-button-login] > div').click();
      cy.wait(2000);
      cy.get('[data-cy=e2e-alert-login] > .MuiAlert-message').should('have.text', 'Credenciais inválidas.');
  });
  it('User is disabled', () => {
      cy.visit('http://localhost:3000/login');
      cy.get('[data-cy=e2e-email-field-login]').type('usuario-inativo@gmail.com');
      cy.get('[data-cy=e2e-password-field-login]').type('123456');
      cy.get('[data-cy=e2e-button-login] > div').click();
      cy.wait(2000);
      cy.get('[data-cy=e2e-alert-login] > .MuiAlert-message').should('have.text', 'Ative seu e-mail para entrar..');
  });
  it('User logged', () => {
      cy.visit('http://localhost:3000/login');
      cy.get('[data-cy=e2e-email-field-login]').type('tiagoluizrs@gmail.com');
      cy.get('[data-cy=e2e-password-field-login]').type('123456');
      cy.get('[data-cy=e2e-button-login] > div').click();
  });
})