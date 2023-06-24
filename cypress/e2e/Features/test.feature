Feature: Calculation of two  number



    # Scenario: Addition of two number
    # Given I visit duckduckgo.com
    # When user Click on 1
    # Adn user click on +
    # And user click on 2
    # Then total should be 3
    # And user verify title



    Scenario: Substration of two number
        When I visit "https://calculator.net"
        And I click on "1"
        And I click operator "+"
        And I click on "3"
        Then I veify result are "4"

    Scenario Outline: Calculation of two number
        When I visit "https://calculator.net"
        And I click on "<number1>"
        And I click operator "<operator>"
        And I click on "<number2>"
        Then I veify result are "<results>"

        Examples:
            | number1 | number2 | operator | results |
            | 1       | 3       | +        | 4       |
            | 1       | 4       | -        | -3      |



    Scenario: API Automation
        When I call "GET" for endpoint "https://reqres.in/api/users?page=2"
        Then I veify body
```
{
"page": 2,
"per_page": 6,
"total": 12,
"total_pages": 2,
"data": [
{
"id": 7,
"email": "michael.lawson@reqres.in",
"first_name": "Michael",
"last_name": "Lawson",
"avatar": "https://reqres.in/img/faces/7-image.jpg"
},
{
"id": 8,
"email": "lindsay.ferguson@reqres.in",
"first_name": "Lindsay",
"last_name": "Ferguson",
"avatar": "https://reqres.in/img/faces/8-image.jpg"
},
{
"id": 9,
"email": "tobias.funke@reqres.in",
"first_name": "Tobias",
"last_name": "Funke",
"avatar": "https://reqres.in/img/faces/9-image.jpg"
},
{
"id": 10,
"email": "byron.fields@reqres.in",
"first_name": "Byron",
"last_name": "Fields",
"avatar": "https://reqres.in/img/faces/10-image.jpg"
},
{
"id": 11,
"email": "george.edwards@reqres.in",
"first_name": "George",
"last_name": "Edwards",
"avatar": "https://reqres.in/img/faces/11-image.jpg"
},
{
"id": 12,
"email": "rachel.howell@reqres.in",
"first_name": "Rachel",
"last_name": "Howell",
"avatar": "https://reqres.in/img/faces/12-image.jpg"
}
],
"support": {
"url": "https://reqres.in/#support-heading",
"text": "To keep ReqRes free, contributions towards server costs are appreciated!"
}
}


```
#    Then I veify status are "200"