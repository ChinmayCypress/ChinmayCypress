// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@4tw/cypress-drag-drop'
import 'cypress-iframe'
Cypress.Commands.add('activity1', (text1,done) => { 

    cy.on ('window:alert', (text) => {
        expect(text).to.eq(text1)
        done() 
      cy.log('hello')
      })  
   
   
})


Cypress.Commands.add('activity2', (text1) => { 

    cy.on ('window:alert', (text) => {
        expect(text).to.eq(text1)
        done() 
      })  
   
   
}
)
Cypress.Commands.add('fillForm', (url, path) => { 

    cy.visit(url)
   
    Cypress.on('uncaught:exception', (err, runnable) => {
     // returning false here prevents Cypress from
     // failing the test
     return false
 })
 cy.get('input[type="file"]').selectFile(path)
 })
 Cypress.Commands.add('uploadfile', (url, path,path2) => { 
    cy.clearAllCookies()
    cy.clearAllSessionStorage()
  cy.visit(Cypress.config('baseUrl'))
  cy.reload()
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
 cy.get('input[id="gender-radio-12"]').check({force:true}).should('be.checked')
 
 cy.get('input[id="hobbies-checkbox-1"]').check({force:true})
 cy.wait(4000)
 cy.get('input[id="hobbies-checkbox-1"]').uncheck({force:true}).should('not.be.checked')
 cy.get('input[id="uploadPicture"]').selectFile(path,{force:true})

 })
 beforeEach(()=>
 {
    //cy.fillForm('https://demoqa.com/automation-practice-form','cypress/fixtures/demo.txt')
    // cy.visit(Cypress.config('baseUrl'))
    //Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
//})
 })
 after(()=>
 {
    cy.log('After*****')
 })
afterEach(()=>
{
   // cy.screenshot()
})

before(()=>
{
    cy.log('before')
    
})
 