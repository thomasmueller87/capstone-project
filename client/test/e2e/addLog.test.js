/// <reference types="Cypress"/>

describe('LogsPage', () => {
  it('Should render a headline', () => {
    cy.viewport(375, 667);
    cy.visit('/logs');
    cy.get('header').contains('DiveLogs');
  });

  it('Should display an error, if duration is filled with text', () => {
    // arrange
    cy.viewport(375, 667);
    cy.visit('/create');
    cy.get('[name="duration"]').click().type('lange');
    cy.get('[data-testid="submit-btn"]').click();

    // assert
    cy.get('span').should('be.visible').contains('Please');
  });
});
