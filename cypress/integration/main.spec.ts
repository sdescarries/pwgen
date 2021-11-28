describe('Password Generator', () => {
  it('loads properly', () => {
    cy.visit('/');
    cy.get('[class="InfiniScroll"]').should('exist');
    cy.get('[class="Password"]').should('exist');
    cy.get('[data-testId="Length"]').should('exist');
    cy.get('[data-testId="dipSwitch-AZ"]').should('exist');
    cy.get('[data-testId="dipSwitch-09"]').should('exist');
    cy.get('[data-testId="dipSwitch-SM"]').should('exist');
  });

  it('scrolls and loads new data', () => {
    cy.get('[class="Password"]').last();
    cy.get('[class="InfiniScroll"]').scrollTo('bottom');
  });

  it('toggles length', () => {
    cy.get('[data-testId="Length"]').click();
  });

  it('toggles upper case', () => {
    cy.get('[data-testId="dipSwitch-AZ"]').click();
  });

  it('toggles numbers', () => {
    cy.get('[data-testId="dipSwitch-09"]').click();
  });

  it('toggles symbols', () => {
    cy.get('[data-testId="dipSwitch-SM"]').click();
  });

});

export {};
