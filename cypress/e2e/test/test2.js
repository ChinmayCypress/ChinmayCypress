it('Assert that the alert is displayed after entering data', () => {
    cy.visit('https://letcode.in/alert')     
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  })

  cy.window().then(win => {
    cy.stub(win, "prompt").returns('hi')
    cy.get('#prompt').click()
    })
    cy.contains('hi')
   
    
  })

  it.only('Assert that the alert is displayed after entering data', () => {
    cy.visit('https://demoqa.com/automation-practice-form')     
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  })
  let element = 0
  cy.get("input.custom-control-input").each(($el, index, $list)=>
  {
    
    cy.log($el);
    cy.log(index);
    cy.log($list);
   // cy.get("input.custom-control-input").eq(index).check({force:true})
    
  })
  
})