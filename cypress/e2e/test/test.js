describe('Alert is displayed with warning text', () => {

    it.only('Assert that the alert is displayed after entering data', (done) => {
      cy.visit('/')     
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    //   cy.on ('window:alert', (text) => {
    //     expect(text).to.eq('You clicked a button')
    //     done()  })                            // waiting for event, fails on timeout    
     
  
        cy.get('#alertButton').click().blur()
    })

    it.only('Assert that the alert is displayed after entering data', (done) => {
        cy.visit('/')     
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
      })
        cy.on ('window:confirm', (text) => {
          expect(text).to.eq('Do you confirm action?')
          done()
          return false  })                            // waiting for event, fails on timeout    
       
    
          cy.get('#confirmButton').click().blur()
      })



      it.only('Assert that the alert is displayed after entering data', (done) => {
        cy.visit('/')     
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
      })
        cy.on ('window:confirm', (text) => {
          expect(text).to.eq('Do you confirm action?')
          done()
           })                            // waiting for event, fails on timeout    
       
    
          cy.get('#confirmButton').click().blur()
      })

 
    it.only('Assert that the alert is displayed after entering data', () => {
        cy.visit('/')     
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
      })
      cy.window().then(win => {
        cy.stub(win, "prompt").returns('hi')
        cy.get('#promtButton').click()
        })
        cy.contains('You entered hi')
    
          // cy.get('#promtButton').type('some data').blur()
      })


      it.only('Assert that the alert is displayed after entering data', () => {
        cy.visit('/')     
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
      })
      cy.window().then(win => {
        cy.stub(win, 'prompt').callsFake(() =>  null);
        });
    })
    it.skip('Assert that the alert is displayed after entering data', (done) => {
        cy.visit('https://letcode.in/alert')     
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
      })
        cy.activity1('Hey! Welcome to LetCode',done)  
        cy.get('#accept').click().blur() 
        cy.wait(3000)                        // waiting for event, fails on timeout    
       cy.activity2('Hey! Welcome to LetCode',done)
       cy.get('#accept').click().blur() 
    //     cy.on ('window:alert', (text) => {
    //         expect(text).to.eq('Hey! Welcome to LetCode')
    //         done() 
    //       cy.log('hello')
    //       }) 
        
      })
   

      it.skip('Assert that the alert is displayed after entering data', (done) => {
        cy.visit('https://letcode.in/alert')       
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
      })
        cy.on ('window:confirm', (text) => {
          expect(text).to.eq('Are you happy with LetCode?')
          done()
          return false  })                            // waiting for event, fails on timeout    
       
    
          cy.get('#confirm').click().blur()
      })

      it.skip('Assert that the alert is displayed after entering data', (done) => {
        cy.visit('https://letcode.in/alert') 
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
      })
        cy.on ('window:confirm', (text) => {
          expect(text).to.eq('Are you happy with LetCode?')
          done()
           })                            // waiting for event, fails on timeout    
       
    
           cy.get('#confirm').click().blur()
      })



//       it.only('Assert that the alert is displayed after entering data', () => {
//         cy.SendRequest('https://reqres.in/api/users?page=2', 'GET','','')
//  cy.SendRequest('https://reqres.in/api/users', 'POST',{
//             "name": "morpheus",
//             "job": "leader"
//         },'').then(()=>
//         {
//             let data = Cypress.env('data')
//             cy.log(data)
//         })
        

   
//       })
  })