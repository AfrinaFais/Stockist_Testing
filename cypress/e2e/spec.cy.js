describe('Google Page Test', () => {
  it('Should open Google homepage', () => {
    cy.visit('https://www.google.com')
    cy.title().should('include', 'Google')      
  })
})