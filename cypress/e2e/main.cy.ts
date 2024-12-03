describe('Password Generator', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('waits for passwords to be generated', () => {
    for (let n = 0; n < 10; n++) {
      cy
        .get(`.Password.Ready#${n}`)
        .should('have.class', 'Ready')
        .contains(/(?!\*{8})/)
        .contains(/\w+/)
        .click();

      cy
        .contains(`.Password#${n}`, /\*{8}/)
        .should('not.have.class', 'Ready');
    }
  });

  it('rotates entries after scroll', () => {
    cy.get('.InfiniScroll').scrollTo('bottom');
    cy.get('.Password#0').should('not.exist');
  });

  it('toggles options', () => {
    cy.get('[data-testId="Length"]').click();
    cy.get('[data-testId="dipSwitch-AZ"]').click();
    cy.get('[data-testId="dipSwitch-09"]').click();
    cy.get('[data-testId="dipSwitch-SM"]').click();
  });

});
