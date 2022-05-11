import { Then, And } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../main/pageObjects/LoginPage"

const loginPage = new LoginPage()

And('The user enters his credentials {string} and {string}', (email, password) => {
    loginPage.enterEmail(email)
    loginPage.clickOnContinueBtn()
    loginPage.enterPassword(password)
})

And('The user clicks on the connection button', () =>  {
    loginPage.clickOnConnectionBtn()
})

Then('The users account page is displayed', () => {
    cy.wait(5000)
    cy.url().should('include', '/account')
})
