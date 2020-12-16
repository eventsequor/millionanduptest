$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ScenariosTestMillionAndUp.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: eventsequor@gmail.com Eder Carbonero"
    },
    {
      "line": 2,
      "value": "#Summary :This is a test carried out by the company Million And Up to evaluate the level of knowledge about automation"
    }
  ],
  "line": 3,
  "name": "Test MillionAndUp",
  "description": "This feature contains the test scenarios proposed by million and up for the technical test",
  "id": "test-millionandup",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login",
  "description": "",
  "id": "test-millionandup;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "The browser \"\u003cnameBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "The page with url \"\u003curl\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The user start the browser",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "The user set user \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The user set password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The user clicks on the save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The user validates that the user \"\u003cusername\u003e\" entered is the same as what is seen on the screen",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The user validates that the password \"\u003cpassword\u003e\" entered is the same as what is seen on the screen",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The user closes the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "test-millionandup;login;",
  "rows": [
    {
      "cells": [
        "nameBrowser",
        "url",
        "username",
        "password"
      ],
      "line": 18,
      "id": "test-millionandup;login;;1"
    },
    {
      "cells": [
        "google",
        "http://thedemosite.co.uk/addauser.php",
        "user1",
        "12345"
      ],
      "line": 19,
      "id": "test-millionandup;login;;2"
    },
    {
      "cells": [
        "google",
        "http://thedemosite.co.uk/addauser.php",
        "user2",
        "54321"
      ],
      "line": 20,
      "id": "test-millionandup;login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Login",
  "description": "",
  "id": "test-millionandup;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "The browser \"google\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "The page with url \"http://thedemosite.co.uk/addauser.php\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The user start the browser",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "The user set user \"user1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The user set password \"12345\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The user clicks on the save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The user validates that the user \"user1\" entered is the same as what is seen on the screen",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The user validates that the password \"12345\" entered is the same as what is seen on the screen",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "google",
      "offset": 13
    }
  ],
  "location": "Steps.getTheBrowser(String)"
});
formatter.result({
  "duration": 445975956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://thedemosite.co.uk/addauser.php",
      "offset": 19
    }
  ],
  "location": "Steps.getTheUrl(String)"
});
formatter.result({
  "duration": 133968,
  "status": "passed"
});
formatter.match({
  "location": "Steps.startBrowser()"
});
formatter.result({
  "duration": 16650222426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_set_user(String)"
});
formatter.result({
  "duration": 1474913636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 23
    }
  ],
  "location": "Steps.the_user_set_password(String)"
});
formatter.result({
  "duration": 252893147,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clickOverButtonSave()"
});
formatter.result({
  "duration": 902004392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 34
    }
  ],
  "location": "Steps.validateUser(String)"
});
formatter.result({
  "duration": 125230595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 38
    }
  ],
  "location": "Steps.validatePassword(String)"
});
formatter.result({
  "duration": 65110186,
  "status": "passed"
});
formatter.match({
  "location": "Steps.closeBrowser()"
});
formatter.result({
  "duration": 6139252425,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login",
  "description": "",
  "id": "test-millionandup;login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "The browser \"google\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "The page with url \"http://thedemosite.co.uk/addauser.php\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The user start the browser",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "The user set user \"user2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The user set password \"54321\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The user clicks on the save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The user validates that the user \"user2\" entered is the same as what is seen on the screen",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The user validates that the password \"54321\" entered is the same as what is seen on the screen",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "google",
      "offset": 13
    }
  ],
  "location": "Steps.getTheBrowser(String)"
});
formatter.result({
  "duration": 137749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://thedemosite.co.uk/addauser.php",
      "offset": 19
    }
  ],
  "location": "Steps.getTheUrl(String)"
});
formatter.result({
  "duration": 114521,
  "status": "passed"
});
formatter.match({
  "location": "Steps.startBrowser()"
});
formatter.result({
  "duration": 4844243011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 19
    }
  ],
  "location": "Steps.the_user_set_user(String)"
});
formatter.result({
  "duration": 1166763451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "54321",
      "offset": 23
    }
  ],
  "location": "Steps.the_user_set_password(String)"
});
formatter.result({
  "duration": 172715315,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clickOverButtonSave()"
});
formatter.result({
  "duration": 788925471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 34
    }
  ],
  "location": "Steps.validateUser(String)"
});
formatter.result({
  "duration": 105830589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "54321",
      "offset": 38
    }
  ],
  "location": "Steps.validatePassword(String)"
});
formatter.result({
  "duration": 44431000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.closeBrowser()"
});
formatter.result({
  "duration": 5375227220,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Successful search",
  "description": "",
  "id": "test-millionandup;successful-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "The browser \"\u003cnameBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "The page with url \"\u003curl\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "The user start the browser",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User searches for \"\u003csearchWord\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "The user validates that the result quantity must be \"\u003cnumberResult\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "The user closes the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "test-millionandup;successful-search;",
  "rows": [
    {
      "cells": [
        "nameBrowser",
        "url",
        "searchWord",
        "numberResult"
      ],
      "line": 31,
      "id": "test-millionandup;successful-search;;1"
    },
    {
      "cells": [
        "google",
        "http://automationpractice.com/index.php",
        "dresses",
        "7"
      ],
      "line": 32,
      "id": "test-millionandup;successful-search;;2"
    },
    {
      "cells": [
        "google",
        "http://automationpractice.com/index.php",
        "shirts",
        "1"
      ],
      "line": 33,
      "id": "test-millionandup;successful-search;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Successful search",
  "description": "",
  "id": "test-millionandup;successful-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "The browser \"google\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "The page with url \"http://automationpractice.com/index.php\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "The user start the browser",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User searches for \"dresses\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "The user validates that the result quantity must be \"7\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "The user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "google",
      "offset": 13
    }
  ],
  "location": "Steps.getTheBrowser(String)"
});
formatter.result({
  "duration": 216077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com/index.php",
      "offset": 19
    }
  ],
  "location": "Steps.getTheUrl(String)"
});
formatter.result({
  "duration": 95614,
  "status": "passed"
});
formatter.match({
  "location": "Steps.startBrowser()"
});
formatter.result({
  "duration": 9929866545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dresses",
      "offset": 19
    }
  ],
  "location": "Steps.searchesFor(String)"
});
formatter.result({
  "duration": 4379113919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 53
    }
  ],
  "location": "Steps.validateNumberProducts(int)"
});
formatter.result({
  "duration": 77260781,
  "status": "passed"
});
formatter.match({
  "location": "Steps.closeBrowser()"
});
formatter.result({
  "duration": 5853538679,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Successful search",
  "description": "",
  "id": "test-millionandup;successful-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "The browser \"google\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "The page with url \"http://automationpractice.com/index.php\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "The user start the browser",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User searches for \"shirts\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "The user validates that the result quantity must be \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "The user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "google",
      "offset": 13
    }
  ],
  "location": "Steps.getTheBrowser(String)"
});
formatter.result({
  "duration": 150714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com/index.php",
      "offset": 19
    }
  ],
  "location": "Steps.getTheUrl(String)"
});
formatter.result({
  "duration": 88052,
  "status": "passed"
});
formatter.match({
  "location": "Steps.startBrowser()"
});
formatter.result({
  "duration": 15752109595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shirts",
      "offset": 19
    }
  ],
  "location": "Steps.searchesFor(String)"
});
formatter.result({
  "duration": 4036245432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "Steps.validateNumberProducts(int)"
});
formatter.result({
  "duration": 58561408,
  "status": "passed"
});
formatter.match({
  "location": "Steps.closeBrowser()"
});
formatter.result({
  "duration": 5167377112,
  "status": "passed"
});
});