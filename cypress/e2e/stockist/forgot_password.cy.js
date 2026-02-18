describe('Forgot Password Flow', () => {

    it('User should request password reset link', () => {
  
      cy.visit('https://stockist.nerdcody.org/login')
  
      cy.contains('Forgot password').click()
  
      cy.url().should('include', '/forgot-password')

      //  Intercept API to get reset link
      cy.intercept('POST', '**/forgot-password').as('forgotPassword')
  
      cy.get('#email').type('fathimaafrina99@gmail.com')
      cy.contains('button','Send reset link').click()
  
      // Wait for API response and get reset URL
      cy.wait('@forgotPassword').then((interception) => {
        const resetUrl = interception.response.body.reset_url
        expect(resetUrl).to.exist // ensure reset link is returned
  
        //  Visit reset password page
        cy.visit(resetUrl)
  
        //  Set new password
        cy.get('#password').first().type(12345678)
        cy.get('#password').last().type(12345678)
        cy.contains('Reset password').click()
      })
  
      // Login with new password
      cy.url({ timeout: 20000 }).should('include','/login')
      cy.get('#email').type('fathimaafrina99@gmail.com')
      cy.get('#password').type(12345678)
      cy.contains('button','Sign in').click()
  
      //  Select organization
      cy.url({ timeout: 20000 }).should('include','/select-organization')
      cy.contains('#organizationName', { timeout: 20000 }).click()
  
      //  Verify dashboard loaded
      cy.url({ timeout: 20000 }).should('include','/dashboard')
      
      })
  
    })
  
  
  