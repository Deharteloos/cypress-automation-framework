import Page from './Page'

class HomePage extends Page {
    
    homePageEndPoint = '/fr'
    
    cookiesPopup = '#didomi-popup'
    cookiesOkBtn = '#didomi-notice-agree-button'
    accountBtn = '.js-myaccount-link'
    accountPanel = '.js-myaccount-panel'
    connectionBtn = 'a[href*="step=authentication"]'

    load() {
        this.goTo(this.homePageEndPoint)
    }    
    
    acceptsCookies() {
        if(!cy.getCookie('didomi_token'))
        {
            this.clickOn(this.cookiesOkBtn)
        }
    }

    hoverOnAccountBtn() {
        this.hoverOn(this.accountBtn)
        cy.get(this.accountPanel).should('be.visible')
    }

    clickOnConnectionBtn() {
        this.clickOn(this.connectionBtn)
    }

}

export default HomePage