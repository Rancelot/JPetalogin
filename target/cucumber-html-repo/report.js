$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateAccount.feature");
formatter.feature({
  "line": 1,
  "name": "CreateAccount",
  "description": "",
  "id": "createaccount",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Successful creation of an account",
  "description": "",
  "id": "createaccount;successful-creation-of-an-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I create new account using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cemail\u003e\" and \"\u003cphone\u003e\" and \"\u003caddress\u003e\" and \"\u003ccity\u003e\" and \"\u003cstate\u003e\" and \"\u003czip\u003e\" and \"\u003ccountry\u003e\" and press save account information",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be able to login successfully using that \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "createaccount;successful-creation-of-an-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "email",
        "phone",
        "address",
        "city",
        "state",
        "zip",
        "country"
      ],
      "line": 12,
      "id": "createaccount;successful-creation-of-an-account;;1"
    },
    {
      "cells": [
        "validusername@domain.com",
        "Secret!",
        "john",
        "smith",
        "me@johnsmith.com",
        "4039999999",
        "123 douglas ridge green",
        "calgary",
        "alberta",
        "t2z4j7",
        "canada"
      ],
      "line": 13,
      "id": "createaccount;successful-creation-of-an-account;;2"
    },
    {
      "cells": [
        "validUserName",
        "ValidPassword",
        "john",
        "smith",
        "me@johnsmith.com",
        "4039999999",
        "123 douglas ridge green",
        "calgary",
        "alberta",
        "t2z4j7",
        "canada"
      ],
      "line": 14,
      "id": "createaccount;successful-creation-of-an-account;;3"
    },
    {
      "cells": [
        "quality3",
        "12345678",
        "john",
        "smith",
        "me@johnsmith.com",
        "4039999999",
        "123 douglas ridge green",
        "calgary",
        "alberta",
        "t2z4j7",
        "canada"
      ],
      "line": 15,
      "id": "createaccount;successful-creation-of-an-account;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Successful creation of an account",
  "description": "",
  "id": "createaccount;successful-creation-of-an-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I create new account using \"validusername@domain.com\" and \"Secret!\" and \"john\" and \"smith\" and \"me@johnsmith.com\" and \"4039999999\" and \"123 douglas ridge green\" and \"calgary\" and \"alberta\" and \"t2z4j7\" and \"canada\" and press save account information",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be able to login successfully using that \"validusername@domain.com\" and \"Secret!\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.i_open_Chrome()"
});
formatter.result({
  "duration": 1864123200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 215527500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 1909936600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 418797700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 657893900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validusername@domain.com",
      "offset": 28
    },
    {
      "val": "Secret!",
      "offset": 59
    },
    {
      "val": "john",
      "offset": 73
    },
    {
      "val": "smith",
      "offset": 84
    },
    {
      "val": "me@johnsmith.com",
      "offset": 96
    },
    {
      "val": "4039999999",
      "offset": 119
    },
    {
      "val": "123 douglas ridge green",
      "offset": 136
    },
    {
      "val": "calgary",
      "offset": 166
    },
    {
      "val": "alberta",
      "offset": 180
    },
    {
      "val": "t2z4j7",
      "offset": 194
    },
    {
      "val": "canada",
      "offset": 207
    }
  ],
  "location": "CreateAccount.i_create_new_account_using_and_and_and_and_and_and_and_and_and_and_and_press_save_account_information(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 961023300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validusername@domain.com",
      "offset": 51
    },
    {
      "val": "Secret!",
      "offset": 82
    }
  ],
  "location": "CreateAccount.i_should_be_able_to_login_successfully_using_that_and(String,String)"
});
formatter.result({
  "duration": 1209731300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Successful creation of an account",
  "description": "",
  "id": "createaccount;successful-creation-of-an-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I create new account using \"validUserName\" and \"ValidPassword\" and \"john\" and \"smith\" and \"me@johnsmith.com\" and \"4039999999\" and \"123 douglas ridge green\" and \"calgary\" and \"alberta\" and \"t2z4j7\" and \"canada\" and press save account information",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be able to login successfully using that \"validUserName\" and \"ValidPassword\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.i_open_Chrome()"
});
formatter.result({
  "duration": 1177719200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 212081600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 346919400,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 125191000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 153456100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validUserName",
      "offset": 28
    },
    {
      "val": "ValidPassword",
      "offset": 48
    },
    {
      "val": "john",
      "offset": 68
    },
    {
      "val": "smith",
      "offset": 79
    },
    {
      "val": "me@johnsmith.com",
      "offset": 91
    },
    {
      "val": "4039999999",
      "offset": 114
    },
    {
      "val": "123 douglas ridge green",
      "offset": 131
    },
    {
      "val": "calgary",
      "offset": 161
    },
    {
      "val": "alberta",
      "offset": 175
    },
    {
      "val": "t2z4j7",
      "offset": 189
    },
    {
      "val": "canada",
      "offset": 202
    }
  ],
  "location": "CreateAccount.i_create_new_account_using_and_and_and_and_and_and_and_and_and_and_and_press_save_account_information(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 792983800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validUserName",
      "offset": 51
    },
    {
      "val": "ValidPassword",
      "offset": 71
    }
  ],
  "location": "CreateAccount.i_should_be_able_to_login_successfully_using_that_and(String,String)"
});
formatter.result({
  "duration": 1232563600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Successful creation of an account",
  "description": "",
  "id": "createaccount;successful-creation-of-an-account;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I create new account using \"quality3\" and \"12345678\" and \"john\" and \"smith\" and \"me@johnsmith.com\" and \"4039999999\" and \"123 douglas ridge green\" and \"calgary\" and \"alberta\" and \"t2z4j7\" and \"canada\" and press save account information",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be able to login successfully using that \"quality3\" and \"12345678\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.i_open_Chrome()"
});
formatter.result({
  "duration": 1185233500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 212530700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 344647000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 130656100,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 153041300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality3",
      "offset": 28
    },
    {
      "val": "12345678",
      "offset": 43
    },
    {
      "val": "john",
      "offset": 58
    },
    {
      "val": "smith",
      "offset": 69
    },
    {
      "val": "me@johnsmith.com",
      "offset": 81
    },
    {
      "val": "4039999999",
      "offset": 104
    },
    {
      "val": "123 douglas ridge green",
      "offset": 121
    },
    {
      "val": "calgary",
      "offset": 151
    },
    {
      "val": "alberta",
      "offset": 165
    },
    {
      "val": "t2z4j7",
      "offset": 179
    },
    {
      "val": "canada",
      "offset": 192
    }
  ],
  "location": "CreateAccount.i_create_new_account_using_and_and_and_and_and_and_and_and_and_and_and_press_save_account_information(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 897954100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality3",
      "offset": 51
    },
    {
      "val": "12345678",
      "offset": 66
    }
  ],
  "location": "CreateAccount.i_should_be_able_to_login_successfully_using_that_and(String,String)"
});
formatter.result({
  "duration": 720143800,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.CreateAccount.i_should_be_able_to_login_successfully_using_that_and(CreateAccount.java:82)\r\n\tat ✽.Then I should be able to login successfully using that \"quality3\" and \"12345678\"(CreateAccount.feature:9)\r\n",
  "status": "failed"
});
formatter.uri("Login.feature");
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
  "duration": 1170007000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_Facebook_page()"
});
formatter.result({
  "duration": 905332200,
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
  "duration": 175794200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1588341200,
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
  "duration": 1169084700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_Facebook_page()"
});
formatter.result({
  "duration": 808159500,
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
  "duration": 154652700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1138372000,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.LoginSteps.i_should_be_able_to_login_successfully(LoginSteps.java:47)\r\n\tat ✽.Then I should be able to login successfully(Login.feature:6)\r\n",
  "status": "failed"
});
});