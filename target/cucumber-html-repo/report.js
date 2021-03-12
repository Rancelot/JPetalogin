$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Successful login",
  "description": "",
  "id": "login;successful-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I go to Facebook page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" combination and press login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "login;successful-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "login;successful-login;;1"
    },
    {
      "cells": [
        "validusername@domain.com",
        "Secret!"
      ],
      "line": 10,
      "id": "login;successful-login;;2"
    },
    {
      "cells": [
        "validUserName",
        "ValidPassword"
      ],
      "line": 11,
      "id": "login;successful-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Successful login",
  "description": "",
  "id": "login;successful-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I go to Facebook page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"validusername@domain.com\" and \"Secret!\" combination and press login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_Chrome_browser()"
});
formatter.result({
  "duration": 4307758800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_Facebook_page()"
});
formatter.result({
  "duration": 1914082200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validusername@domain.com",
      "offset": 15
    },
    {
      "val": "Secret!",
      "offset": 46
    }
  ],
  "location": "LoginSteps.i_enter_valid_and_combination_and_press_login_button(String,String)"
});
formatter.result({
  "duration": 333696500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 3403103500,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.LoginSteps.i_should_be_able_to_login_successfully(LoginSteps.java:47)\r\n\tat ✽.Then I should be able to login successfully(Login.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "Successful login",
  "description": "",
  "id": "login;successful-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I go to Facebook page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"validUserName\" and \"ValidPassword\" combination and press login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_Chrome_browser()"
});
formatter.result({
  "duration": 1496542700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_Facebook_page()"
});
formatter.result({
  "duration": 1503347100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validUserName",
      "offset": 15
    },
    {
      "val": "ValidPassword",
      "offset": 35
    }
  ],
  "location": "LoginSteps.i_enter_valid_and_combination_and_press_login_button(String,String)"
});
formatter.result({
  "duration": 219052700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 4707577800,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.LoginSteps.i_should_be_able_to_login_successfully(LoginSteps.java:47)\r\n\tat ✽.Then I should be able to login successfully(Login.feature:6)\r\n",
  "status": "failed"
});
});