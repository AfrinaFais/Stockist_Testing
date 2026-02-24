describe('Owner Login & Dashboard Verification', () => {

    it('Should login and verify Dashboard screen', () => {
  
      cy.visit('https://stockist.nerdcody.org/login')
  
      cy.get('#email').type('smak@gmail.com')
      cy.get('#password').type('Nifras@321')
      cy.contains('button', 'Sign in').click()
  
      cy.url().should('eq', 'https://stockist.nerdcody.org/dashboard')

      
      cy.contains('Welcome back, SMAK - Owner!').should('be.visible')
      cy.contains('SMAK - Colombo').should('be.visible')
      
  
    })
  
  })