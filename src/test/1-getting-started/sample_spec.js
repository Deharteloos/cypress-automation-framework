import HomePage from '../../main/pageObjects/HomePage'
import LoginPage from '../../main/pageObjects/LoginPage'

const homePage = new HomePage()
const loginPage = new LoginPage()

describe('Users actions on web app', () => {
    it('Authenticate successfully', () => {
        homePage.load()
        //homePage.acceptsCookies()
        homePage.hoverOnAccountBtn()
        homePage.clickOnConnectionBtn()

        loginPage.enterEmail()
        loginPage.clickOnContinueBtn()
        loginPage.enterPassword()
        loginPage.clickOnConnectionBtn()

        cy.wait(5000)
        cy.url().should('include', '/account')
    })
})