/// <reference types="Cypress"/>

describe('LogsPage', () => {
  // Clean test DB + add test log
  before(() => {
    cy.request('/api/testdelete');
    cy.fixture('logData').then((log) =>
      cy.request('POST', '/api/logs', log)
    );
    cy.visit('/logs');
    cy.wait(3500);
  });
  it('Should add a new log (without Map and Signature) and display on logs list', () => {
    // arrange
    cy.viewport(375, 667);
    cy.visit('/create');
    cy.get('[name="date"]').type('2022-02-01');
    cy.get('[name="time"]').type('12:45');
    cy.get('[name="duration"]').type('38');
    cy.get('[name="country"]').type('Egypt');
    cy.get('[name="spot"]').type('Abu Naham');
    cy.get('[data-testid=LogMap]').click();
    cy.get('[name="airStart"]').type('200');
    cy.get('[name="airEnd"]').type('50');
    cy.get('[name="airEan"]').type('21');
    cy.get('[name="waterDepthMax"]').type('25,4');
    cy.get('[name="waterDepthAvg"]').type('15,7');
    cy.get('[name="waterTemp"]').type('20');
    cy.get('[name="buddy"]').type('Martin');
    cy.get('[name="notes"]').type(
      'Cool dive with Martin. Love the colorful fishes here in Egypt!'
    );
    cy.get('[data-testid=addlog-submit]').click();
    cy.wait(3500);
    // assert
    cy.url().should('include', '/logs');
    cy.contains('01.02.2022').should('be.visible');
    cy.contains('12:45').should('be.visible');
    cy.contains('38').should('be.visible');
    cy.contains('Abu Naham').should('be.visible');
  });
});
