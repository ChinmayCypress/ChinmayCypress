class calculator{


    visitsite(param)
    {

        cy.visit(param)
        
    }

    clickOnNumber()
    {
        cy.get('[onclick="r(2)"]').click()
    }
    typeinSearch(page)
    {
        cy.wait(3000)
        cy.get('#calcSearchTerm',{timeout:4000}).type(page)
    }



}
module.exports = calculator