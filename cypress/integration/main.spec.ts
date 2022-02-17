describe('Password Generator', () => {
  it('loads properly', () => {
    cy.visit('/');
  });

  for (let n = 0; n < 10; n++) {
    it(`waits for password ${n} to be generated`, () => {
      cy
        .get(`.Password.Ready#${n}`)
        .should('have.class', 'Ready')
        .contains(/(?!\*{8})/)
        .contains(/\w+/);
    });
  }

  it('copies password 0 on click', () => {
    cy.get('.Password.Ready#0').click();

    /* Can't read clipboard content without manual authorization
    cy.window()
      .then(({ navigator }) =>navigator.clipboard.readText())
      .then((text) => expect(text).to.match(/\w{8}/));
    */
  });

  it('clears the consumed password from state', () => {
    cy
      .contains('.Password#0', /\*{8}/)
      .should('not.have.class', 'Ready');
  });

  it('scrolls and loads new data', () => {
    cy.get('.InfiniScroll').scrollTo('bottom');
  });

  it('waits for password 0 to disappear', () => {
    cy.get('.Password .Ready #0').should('not.exist');
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

export { };
