import Page from "./Page";

const data = require('./data.json')

class LoginPage extends Page {

    emailInput = '#signin_signup-email'
    continueBtn = '#signin_signup-continue'
    passwordInput = '#signin_signup-password'
    connectionBtn = '#signin_signup-signin'

    enterEmail(email) {
        this.set(this.emailInput, email, {force: true})
    }

    enterPassword(password) {
        this.set(this.passwordInput, password, {force: true})
    }

    clickOnContinueBtn() {
        this.clickOn(this.continueBtn)
    }

    clickOnConnectionBtn() {
        this.clickOn(this.connectionBtn)
    }

}

export default LoginPage