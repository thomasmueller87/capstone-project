/// <reference types="Cypress"/>

describe('Settings', () => {
  it('Should enter values into settings. These values should be shown on creat section (from localStorage)', () => {
    cy.viewport(375, 667);
    cy.clearLocalStorage();
    cy.visit('/settings');
    cy.get('[name="country"]').type('Sweden');
    cy.get('[name="airEan"]').type('30');
    cy.get('[name="buddy"]').type('Martin');
    cy.get('[data-testid=settings-button-submit]').click();
    cy.wait(500);

    //Assert
    cy.visit('/create');
    cy.get('[data-testid="input-country"]').should(
      'have.value',
      'Sweden'
    );
    cy.get('[data-testid="input-airEan"]').should(
      'have.value',
      '30'
    );
    cy.get('[data-testid="input-buddy"]').should(
      'have.value',
      'Martin'
    );
  });
});
