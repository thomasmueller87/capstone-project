/// <reference types="Cypress"/>

describe('LogsPage', () => {
  // Clean test DB + add test log
  before(() => {
    cy.wait(500);
    cy.request('/api/testdelete');
    cy.fixture('logData').then((log) =>
      cy.request('POST', '/api/logs', log)
    );
  });
  it('Should add a new log (without signature)', () => {
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
    cy.get('[name="waterDepthMax"]').type('25');
    cy.get('[name="waterDepthAvg"]').type('15');
    cy.get('[name="waterTemp"]').type('20');
    cy.get('[name="buddy"]').type('Martin');
    cy.get('[name="notes"]').type(
      'Cool dive with Martin. Love the colorful fishes here in Egypt!'
    );
    cy.get('[data-testid=addlog-submit]').click();
    cy.wait(1000);
  });

  it('New log should be shwon on top of logs list and contain all data (newest entry)', () => {
    cy.visit('/logs');
    cy.get('[data-testid="LogCard"]').first().click('center');
    cy.get('[data-testid="LogCard"]')
      .first()
      .find('[data-testid="LogCard-date"]')
      .should('be.visible')
      .should('contain', '01.02.2022');
    cy.get('[data-testid="LogCard"]')
      .first()
      .find('[data-testid="LogCard-time"]')
      .should('be.visible')
      .should('contain', '12:45');
    cy.get('[data-testid="LogCard"]')
      .first()
      .find('[data-testid="LogCard-duration"]')
      .should('be.visible')
      .should('contain', '38');
    cy.get('[data-testid="LogCard"]')
      .first()
      .find('[data-testid="LogCard-country"]')
      .should('be.visible')
      .should('contain', 'Egypt');
    cy.get('[data-testid="LogCard"]')
      .first()
      .find('[data-testid="LogCard-spot"]')
      .should('be.visible')
      .should('contain', 'Abu Naham');
    cy.get('[data-testid="LogCard"]')
      .first()
      .find('[data-testid="LogCard-airStart"]')
      .should('be.visible')
      .should('contain', '200');
    cy.get('[data-testid="LogCard"]')
      .first()
      .find('[data-testid="LogCard-airEnd"]')
      .should('be.visible')
      .should('contain', '50');
    cy.get('[data-testid="LogCard"]')
      .first()
      .find('[data-testid="LogCard-airEan"]')
      .should('be.visible')
      .should('contain', '21');
    cy.get('[data-testid="LogCard"]')
      .first()
      .find('[data-testid="LogCard-waterDepthMax"]')
      .should('be.visible')
      .should('contain', '25');
    cy.get('[data-testid="LogCard"]')
      .first()
      .find('[data-testid="LogCard-waterDepthAvg"]')
      .should('be.visible')
      .should('contain', '15');
    cy.get('[data-testid="LogCard"]')
      .first()
      .find('[data-testid="LogCard-buddy"]')
      .should('be.visible')
      .should('contain', 'Martin');
    cy.get('[data-testid="LogCard"]')
      .first()
      .find('[data-testid="LogCard-signature"]')
      .should('be.visible')
      .should('contain', '');
    cy.get('[data-testid="LogCard"]')
      .first()
      .find('[data-testid="LogCard-notes"]')
      .should('be.visible')
      .should(
        'contain',
        'Cool dive with Martin. Love the colorful fishes here in Egypt!'
      );
  });
});
