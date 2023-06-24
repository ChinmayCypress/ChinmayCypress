class Calculator
{
constructor(response)
{
    this.response = response
}
visitWebPage(url)
{
    cy.visit(url)
}
clickOnNumber(number)
{
    cy.get('[onclick="r('+number+')"]').click()
}
clickonOperator(operator)
{
    
   cy.get(`[onclick="r('`+operator+`')"]`).click()
}
verifiy(result)
{
    cy.get('#sciOutPut').should('contain.text',result)
}

apiGetCall(method,endpoint)
{
    
    cy.request({method:method,url:endpoint}).then((response)=>
    {
      
      this.response=    response.body
      // expect(200).to.eql(statuscode)
    })

}
verifyresponsebody(docstring)
{
    
    expect(JSON.parse(docstring)).to.eqls(this.response)

}
}

module.exports ={ Calculator}