describe('Reset Password Page', () => {

    it('User can set new password using reset link', () => {
  
      cy.visit('https://stockist.nerdcody.org/reset-password?token=ea872b635b4d4268555650af063152c22695f6b307ec07c066bea2518fcc1cc8')
  
      cy.get('#password').type('Newpass123!')
      cy.get('#confirm').type('Newpass123!')
  
      cy.contains('Reset password').click()
  
      cy.url({ timeout: 20000 }).should('include','/login')
  
    })
  
  })
  