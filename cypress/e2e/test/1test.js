/// <reference types="cypress" />

// const calculator = require('../Pages/calculatorPage')
// const CSS = require('../../../allcss.json')
// let loc1 ='#fullName'
// let calc = new calculator()
//it.skip('visit a page', () => {

//    calc.visitsite('https://letcode.in/test')
//   // cy.contains('Table').eq(0).scrollIntoView()
//   //  cy.get('p[class="card-header-title is-size-3"]').eq(0).then((data)=>{
//   //   cy.log(data.text());
//   //  })

//   // cy.get('p[class="card-header-title is-size-3"]').eq(5).then((data)=>
//   // {
//   //   if (data.text().includes=='Radio') {
//   //     cy.log(data.text('Perform anything here'))
//   //     cy.contains(data.text()).click()
//   //   }
//   //   else
//   //   {

//   //   }
//   //   //expect(data.text()).contain('Input')
//   // })

//   // cy.contains('Watch tutoria').click()
//   // calc.clickOnNumber()
//   // calc.typeinSearch('Demo1')
//   cy.get('select[id="fruits"]').select('Mango')
// //   calc.visitsite('https://letcode.in/file')
// //   //cy.get('#draggable').drag('#droppable',{force:true})
// //  // cy.get('#sample-box').drag(198, 137, 0)
// //  cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json',{force:true})

// //  cy.get('#xls').click()

// //  cy.readFile('cypress/downloads/sample.xlsx').should('exist')
// //     // https://on.cypress.io/as
//   // cy.visit('https://calculator.net',{timeout:3000})
//   // cy.url().should('contain','https://www.calculator.net/')
//   // cy.log('hello')
//   // cy.wait(3000)
//   // //cy.get('#hl2 > :nth-child(1) > a').scrollIntoView().click({force:true,timeout:5000,waitForAnimations:true})

//   // cy.get('#hl2 > :nth-child(1) > a').scrollIntoView()
//   // cy.get('#hl2 > :nth-child(1) > a').click({force:true,timeout:5000,waitForAnimations:true})
//   // cy.get('#printit > a').click()
//   // cy.get('#cage',{timeout:3000}).clear().type('4500000',{delay:550})
//   // cy.get('.clearbtn').should('be.visible').cl

// })

// // cy.url().then((data)=>
// // {
// //   cy.log(data)
// //   expect(data).to.contain('https://www.calculator.net/')
// // })
// // cy.url({log:true}).should('contain','https://www.calculator.net/')


// // cy.get('span[onclick="r(7)"]').scrollIntoView().click()
// // cy.get('#calcSearchTerm').type('BMI calculator')
// // cy.get('#bluebtn').scrollIntoView().click()
// //  cy.get('#sciOutPut').scrollIntoView()
// //  cy.get('[href="//www.calculator.net"]').scrollIntoView()

// it.skip('visit a page', () => {
// cy.visit('https://letcode.in/dropdowns')
// cy.get('#country').click().contains('Apple').click()

// })


// it.skip('visit a page', () => {
//   cy.visit('https://letcode.in/dropdowns')

//   cy.fixture('demo.txt').then((data)=>
//   {
//     cy.get('#upload').selectFile('demo.txt')
//   })
//   cy.readFile('cypress/fixtures/demo.txt').then((data)=>
//   {
//     cy.log(data)
//   })

//   })


//   it.skip('visit a page', () => {
//     cy.visit('https://letcode.in/file')
//   cy.fixture('example.json').then((data)=>
//   {
//     cy.get(loc1).type(data.name)





//   })



//     })


//     it.skip('visit a page', () => {


//      // cy.visit(Cypress.config('baseUrl'))
//       cy.visit(Cypress.env('url'))
//       cy.get('.is-7-desktop > .card > .card-contet').then((data)=>
//       {
//        cy.writeFile('.test.csv',data.text())
//        })
//     })

// it.skip('visit a page', () => {



//   cy.get('input[id="hobbies-checkbox-1"]').check({force:true})
//   cy.get('input[id="gender-radio-1"]').check({force:true})
//   cy.get('#dateOfBirthInput').click()
//   cy.get('select[class="react-datepicker__month-select"]').select("0")
//   cy.get('input[id="hobbies-checkbox-1"]').uncheck({force:true})
//   // cy.visit(Cypress.config('baseUrl'))
// //    cy.visit('https://demoqa.com/automation-practice-form')
// //    Cypress.on('uncaught:exception', (err, runnable) => {
// //     // returning false here prevents Cypress from
// //     // failing the test
// //     return false
// // })
// // cy.get('input[type="file"]').selectFile('cypress/fixtures/demo.txt')
//  })



//  it.skip('visit a page', () => {
//    cy.uploadfile(Cypress.config('baseUrl'),Cypress.env('filePath'))


//  })
//  it.skip('visit a page', () => {
//   cy.visit('https://demoqa.com/tool-tips')
//   cy.get('#toolTipButton').trigger('mouseover')

// })
// it.only('visit a page', () => {
//   cy.visit('https://demoqa.com/droppable')
//   cy.get('#draggable').trigger('mousedown').move({deltaX:360,deltaY:128})




// })
// //  it.skip('visit a page', () => {
// //   cy.uploadfile('https://demoqa.com/automation-practice-form','cypress/fixtures/demo.txt')

// // })

// it.skip('test',()=>
// {
//   cy.visit('https://letcode.in/frame')
//   cy.iframe('#firstFr').find('input[name="fname"]').eq(0).type('hello')
//   cy.iframe('#firstFr').iframe('iframe[src="innerFrame"]')

// })

// it.skip('test',()=>
// {
//   fs.unlinkSync('cypress/screenshots')
//   cy.visit('https://letcode.in/file')
//   cy.get('#xls').click()
//   cy.readFile('cypress/downloads/sample.xlsx').should('exist')

// })



// it.skip('test',()=>
// {

//   cy.visit('https://letcode.in/frame')
//   cy.wait(4000)
//   cy.iframe('iframe[name="firstFr"]').find('input[name="fname"]').type('hello')
//   // cy.get('#xls').click()
//   // cy.readFile('cypress/downloads/sample.xlsx').should('exist')

// })




  
    

   

  
    
  // cy.wait(4000)
  // cy.get('label[for$="1"] :nth-child(0)').check()
  // cy.get('#doubleClickBtn').trigger('copy')

 // cy.get('#toolTipButton').trigger('')
  //cy.get('input[id="no"]').scrollIntoView().trigger('click')
  //cy.iframe('iframe[name="firstFr"]').find('input[name="fname"]').type('hello')
  // cy.get('#xls').click()
  // cy.readFile('cypress/downloads/sample.xlsx').should('exist')




it.skip('test', () => {


  cy.request({ method: "GET", url: 'https://reqres.in/api/users?page=2' }).then((resp) => {
    let data = [{ "id": 7, "email": "michael.lawson@reqres.in", "first_name": "Michael", "last_name": "Lawson", "avatar": "https://reqres.in/img/faces/7-image.jpg" }, { "id": 8, "email": "lindsay.ferguson@reqres.in", "first_name": "Lindsay", "last_name": "Ferguson", "avatar": "https://reqres.in/img/faces/8-image.jpg" }, { "id": 9, "email": "tobias.funke@reqres.in", "first_name": "Tobias", "last_name": "Funke", "avatar": "https://reqres.in/img/faces/9-image.jpg" }, { "id": 10, "email": "byron.fields@reqres.in", "first_name": "Byron", "last_name": "Fields", "avatar": "https://reqres.in/img/faces/10-image.jpg" }, { "id": 11, "email": "george.edwards@reqres.in", "first_name": "George", "last_name": "Edwards", "avatar": "https://reqres.in/img/faces/11-image.jpg" }, { "id": 12, "email": "rachel.howell@reqres.in", "first_name": "Rachel", "last_name": "Howell", "avatar": "https://reqres.in/img/faces/12-image.jpg" }]
    cy.log(JSON.stringify(resp.body));
    expect(resp.body.data[0]).to.contain(data[0])
    expect(resp.status).eqls(200)
    expect(resp.statusText).equal('OK')
    cy.log(resp.isOkStatusCode);
    cy.log(resp.duration)
    cy.log(resp.headers)
  })

  cy.request({
    method: "POST", url: 'https://reqres.in/api/users', body: {
      "name": "morpheus",
      "job": "leader"
    }
  }).then((resp) => {
    let data = {
      "name": "morpheus",
      "job": "leader",
     
  }
    cy.log(JSON.stringify(resp.body));
    expect(resp.body).to.contain(data)
    expect(resp.status).eqls(201)
    expect(resp.statusText).equal('Created')
    cy.log(resp.isOkStatusCode);
    cy.log(resp.duration)
    cy.log(resp.headers)
  })

})
