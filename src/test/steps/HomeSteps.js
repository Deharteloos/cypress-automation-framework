import { Given, When } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../main/pageObjects/HomePage"

const homePage = new HomePage()

Given('A user is on the home page', () => {
    homePage.load()
    //homePage.acceptsCookies()
})

When('The user clicks on the identification button', () => {
    homePage.hoverOnAccountBtn()
    homePage.clickOnConnectionBtn()
})