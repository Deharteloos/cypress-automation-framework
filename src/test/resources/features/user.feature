Feature: Users actions on the web app

    Scenario Outline: Successfull authentication
        Given A user is on the home page
        When The user clicks on the identification button
        And The user enters his credentials "<email>" and "<password>"
        And The user clicks on the connection button
        Then The users account page is displayed

        Examples:
            | email                 | password   |
            | ndorichnel@gmail.com  | Nd0r\|chnel |