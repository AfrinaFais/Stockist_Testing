describe('Login Page Test', () => {
    it('Should login successfully with valid credentials', () => {
        //login page open
        cy.visit('https://beta-admin.livnd.com/login')
        
        cy.get('#email').type('fathimaafrina99+va@gmail.com')
        cy.get('#password').type('e459badffb16f347')
        cy.get('button[type="submit"]').click()
        cy.contains('Dashboard').should('be.visible')
    })      
})