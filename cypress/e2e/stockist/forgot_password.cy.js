describe('Forgot Password - Request Link', () => {

  it('User requests reset link', () => {

    cy.visit('https://stockist.nerdcody.org/login')

    cy.contains('Forgot password').click()

    cy.url().should('include', '/forgot-password')

    cy.get('#email').type('fathimaafrina99@gmail.com')

    cy.contains('Send reset link').click()

    // only verify system response
    cy.contains(/email|sent|reset/i, { timeout: 10000 }).should('be.visible')

    cy.contains('Back to sign in').click()

  })

})
