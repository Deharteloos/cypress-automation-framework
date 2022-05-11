class Page {
    
    set(element, text, options) {
        if(arguments.length == 3) {
            cy.get(element)
                .clear(options)
                .type(text, options)
        }
        else {
            cy.get(element)
                .clear()
                .type(text)
        }
    }

    clickOn(element, options) {
        if(arguments.length == 2) {
            cy.get(element)
                .should('be.visible')
                .click(options)
        }
        else {
            cy.get(element)
                .should('be.visible')
                .click()
        }
    }

    goTo(url) {
        cy.visit(url)
    }

    hoverOn(element) {
        cy.get(element)
            .trigger('mouseover')
            .trigger('mouseenter')
    }

}

export default Page