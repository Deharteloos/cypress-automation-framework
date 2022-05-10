describe('Users actions on web app', () => {
    it('Authenticate successfully', () => {
        cy.visit('/fr')
        cy.get('#didomi-notice-agree-button').click()
        cy.get('.js-myaccount-link').trigger('mouseenter')
        cy.get('.js-myaccount-panel').should('be.visible')
        cy.get('a').contains("S'identifier").click()

        cy.get('#signin_signup-email').type('ndorichnel@gmail.com', {force: true})
        cy.get('#signin_signup-continue').click()
        cy.get('#signin_signup-password').type('Nd0r|chnel', {force: true})
        cy.get('#signin_signup-signin').click()

        cy.wait(5000)
        cy.url().should('include', '/account')
    })
})