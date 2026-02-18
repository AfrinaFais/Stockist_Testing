describe('Stockist Signup Flow', () => {

  it('User should signup, then sign in, and reach dashboard', () => {

    // 1️. Visit login page
    cy.visit('https://stockist.nerdcody.org/login')

    // 2️. Click Sign up
    cy.contains('Sign up').click()

    // 3️. Verify pricing page loaded
    cy.contains('Choose your plan to get started').should('be.visible')

    // 4️. Select Starter plan
    cy.contains('Get Started').first().click()

    
    // 5️. Wait for signup page
    cy.url({ timeout: 20000 }).should('include', '/vendor-signup/register')
    cy.contains('Create account').should('be.visible')

    // 6️. Fill signup form
    cy.get('#organizationName').type('AAA Distributors')
    cy.get('#name').type('Afrin')
    cy.get('#email').type('afri@gmail.com')
    cy.get('#password').type('123456')
    cy.get('#phone').type('0771234567')
    cy.get('#address').type('Colombo')


    // 7️. Submit form
    cy.contains('Create account').click()

    
    
   // 8. Wait for login page after signup
   cy.url({ timeout: 20000 }).should('include', '/login')

   // 9. Sign in using the same credentials
   cy.get('input[type="email"]').should('be.visible').type('afri@gmail.com')
   cy.get('input[type="password"]').type('123456')
   cy.contains('button','Sign in').click()

 

   
    // 10. Wait for select-organization page
    cy.url({ timeout: 20000 }).should('include', '/select-organization')
    
    // 11.Wait for visible organization option and select it
    cy.contains('ABC Distributors', { timeout: 20000 }).should('be.visible').click()

    // 12️. Now dashboard should load
    cy.url({ timeout: 20000 }).should('include', '/dashboard')

    })

  })

  


