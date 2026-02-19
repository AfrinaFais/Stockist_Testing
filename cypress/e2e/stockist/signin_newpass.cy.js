describe('Login with new password', () => {

    it('User logs in successfully', () => {
  
      cy.visit('https://stockist.nerdcody.org/login')
  
      cy.get('#email').type('fathimaafrina99@gmail.com')
      cy.get('#password').type('Newpass123!')
  
      cy.contains('button','Sign in').click()
  
      cy.url({ timeout: 20000 }).should('include','/dashboard')
  
    })
  
  })
  