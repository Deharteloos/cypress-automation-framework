import Page from "./Page";

const data = require('./data.json')

class LoginPage extends Page {

    emailInput = '#signin_signup-email'
    continueBtn = '#signin_signup-continue'
    passwordInput = '#signin_signup-password'
    connectionBtn = '#signin_signup-signin'

    enterEmail() {
        this.set(this.emailInput, data.email, {force: true})
    }

    enterPassword() {
        this.set(this.passwordInput, data.password, {force: true})
    }

    clickOnContinueBtn() {
        this.clickOn(this.continueBtn)
    }

    clickOnConnectionBtn() {
        this.clickOn(this.connectionBtn)
    }

}

export default LoginPage