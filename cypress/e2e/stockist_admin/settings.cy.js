describe('Settings Page Verification', () => {

    it('Should verify Organization Settings screen content', () => {
  
      cy.viewport(1280, 800)
  
      // Login
      cy.visit('https://stockist.nerdcody.org/login')
  
      cy.get('#email').type('smak@gmail.com')
      cy.get('#password').type('Nifras@321')
      cy.contains('button', 'Sign in').click()
  
      cy.url().should('include', '/dashboard')
  
      // Navigate to Settings
      cy.visit('https://stockist.nerdcody.org/settings')
  
      cy.url().should('include', '/settings')
  
      //  Verify Page Heading
      cy.contains('Organization Settings').should('be.visible')
      cy.contains('Manage your organization settings and preferences')
        .should('be.visible')
  
      //  Verify Section Title
      cy.contains('General Settings').should('be.visible')
  
      //  Verify Field Values
      cy.get('#name').should('contain.value', 'SMAK - Colombo')
      cy.get('#email').should('contain.value', 'smak@gmail.com')
      cy.get('#phone').should('contain.value', '+94778990300')
  
      //  Verify Currency
      cy.contains('button','USD - US Dollar').should('be.visible')
  
      //  Verify Country
      cy.contains('button','Not set').should('be.visible')
  
    })
  
  })