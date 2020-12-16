#Author: eventsequor@gmail.com Eder Carbonero
#Summary :This is a test carried out by the company Million And Up to evaluate the level of knowledge about automation
Feature: Test MillionAndUp
  This feature contains the test scenarios proposed by million and up for the technical test

  Scenario Outline: Login
    Given The browser "<nameBrowser>"
    And The page with url "<url>"
    Then The user start the browser
    Then The user set user "<username>"
    Then The user set password "<password>"
    Then The user clicks on the save button
    When The user validates that the user "<username>" entered is the same as what is seen on the screen
    When The user validates that the password "<password>" entered is the same as what is seen on the screen
    Then The user closes the browser

    Examples: 
      | nameBrowser | url                                   | username | password |
      | google      | http://thedemosite.co.uk/addauser.php | user1    |    12345 |
      | google      | http://thedemosite.co.uk/addauser.php | user2    |    54321 |

  Scenario Outline: Successful search
    Given The browser "<nameBrowser>"
    And The page with url "<url>"
    Then The user start the browser
    Then User searches for "<searchWord>"
    When The user validates that the result quantity must be "<numberResult>"
    Then The user closes the browser

    Examples: 
      | nameBrowser | url                                     | searchWord | numberResult |
      | google      | http://automationpractice.com/index.php | dresses    |            7 |
      | google      | http://automationpractice.com/index.php | shirts     |            1 |
