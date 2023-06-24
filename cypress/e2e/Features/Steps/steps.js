const { When, Then,And } = require("@badeball/cypress-cucumber-preprocessor");
const {Calculator} = require('../Pages/calc')

let calculator = new Calculator
let responsedata 
When("I visit {string}", (url) => {
  calculator.visitWebPage(url)

  cy.request({method:'GET',url:'https://reqres.in/api/users?page=2'})
});

When('I click on {string}',(number)=>
{
  calculator.clickOnNumber(number)
})
When('I click operator {string}',(number)=>
{
  calculator.clickonOperator(number)
})
Then('I veify result are {string}',(result)=>
{
   calculator.verifiy(result)
})
When('I call {string} for endpoint {string}',(method,endpoint)=>
{
  
  
    calculator.apiGetCall(method,endpoint)
    // expect(200).to.eql(statuscode)

  
})
Then('I veify body',(docstring)=>
{
   calculator.verifyresponsebody(docstring)
})