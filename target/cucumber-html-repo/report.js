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
  "duration": 1961151200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 254446800,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 2200614500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 615982000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 730810100,
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
  "duration": 987944400,
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
  "duration": 1330062900,
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
  "duration": 1179335700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 213309700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 385918300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 138575700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 154792200,
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
  "duration": 777473400,
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
  "duration": 1289385900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Account passwords do not match",
  "description": "",
  "id": "createaccount;account-passwords-do-not-match",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I create new account using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and \"\u003cpassword2\u003e\" and \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cemail\u003e\" and \"\u003cphone\u003e\" and \"\u003caddress\u003e\" and \"\u003ccity\u003e\" and \"\u003cstate\u003e\" and \"\u003czip\u003e\" and \"\u003ccountry\u003e\" and press save account information",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should get an error message that passwords do not match",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "createaccount;account-passwords-do-not-match;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "password2",
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
      "line": 26,
      "id": "createaccount;account-passwords-do-not-match;;1"
    },
    {
      "cells": [
        "quality1234",
        "12345678",
        "87654321",
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
      "line": 27,
      "id": "createaccount;account-passwords-do-not-match;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Account passwords do not match",
  "description": "",
  "id": "createaccount;account-passwords-do-not-match;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I create new account using \"quality1234\" and \"12345678\" and \"87654321\" and \"john\" and \"smith\" and \"me@johnsmith.com\" and \"4039999999\" and \"123 douglas ridge green\" and \"calgary\" and \"alberta\" and \"t2z4j7\" and \"canada\" and press save account information",
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
    10,
    11
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should get an error message that passwords do not match",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.i_open_Chrome()"
});
formatter.result({
  "duration": 1176157500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 289674000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 385603700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 128514700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 142914700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality1234",
      "offset": 28
    },
    {
      "val": "12345678",
      "offset": 46
    },
    {
      "val": "87654321",
      "offset": 61
    },
    {
      "val": "john",
      "offset": 76
    },
    {
      "val": "smith",
      "offset": 87
    },
    {
      "val": "me@johnsmith.com",
      "offset": 99
    },
    {
      "val": "4039999999",
      "offset": 122
    },
    {
      "val": "123 douglas ridge green",
      "offset": 139
    },
    {
      "val": "calgary",
      "offset": 169
    },
    {
      "val": "alberta",
      "offset": 183
    },
    {
      "val": "t2z4j7",
      "offset": 197
    },
    {
      "val": "canada",
      "offset": 210
    }
  ],
  "location": "CreateAccount.i_create_new_account_using_and_and_and_and_and_and_and_and_and_and_and_and_press_save_account_information(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 718395000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_should_get_an_error_message_that_passwords_do_not_match()"
});
formatter.result({
  "duration": 628881000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Account has already been made",
  "description": "",
  "id": "createaccount;account-has-already-been-made",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I create new account using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cemail\u003e\" and \"\u003cphone\u003e\" and \"\u003caddress\u003e\" and \"\u003ccity\u003e\" and \"\u003cstate\u003e\" and \"\u003czip\u003e\" and \"\u003ccountry\u003e\" and press save account information",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I should get an error message that account could not be created",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "createaccount;account-has-already-been-made;",
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
      "line": 39,
      "id": "createaccount;account-has-already-been-made;;1"
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
      "line": 40,
      "id": "createaccount;account-has-already-been-made;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "Account has already been made",
  "description": "",
  "id": "createaccount;account-has-already-been-made;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 35,
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
  "line": 36,
  "name": "I should get an error message that account could not be created",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.i_open_Chrome()"
});
formatter.result({
  "duration": 1200603500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 231017301,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 397938000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 140020700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 151827800,
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
  "duration": 873462899,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_should_get_an_error_message_that_account_could_not_be_created()"
});
formatter.result({
  "duration": 651110800,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.CreateAccount.i_should_get_an_error_message_that_account_could_not_be_created(CreateAccount.java:98)\r\n\tat ✽.Then I should get an error message that account could not be created(CreateAccount.feature:36)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "Account is missing individual mandatory data",
  "description": "",
  "id": "createaccount;account-is-missing-individual-mandatory-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I create new account using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cemail\u003e\" and \"\u003cphone\u003e\" and \"\u003caddress\u003e\" and \"\u003ccity\u003e\" and \"\u003cstate\u003e\" and \"\u003czip\u003e\" and \"\u003ccountry\u003e\" and press save account information",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I should get an error message that account is missing information",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "createaccount;account-is-missing-individual-mandatory-data;",
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
      "line": 52,
      "id": "createaccount;account-is-missing-individual-mandatory-data;;1"
    },
    {
      "cells": [
        "newuser1",
        "12345678",
        "",
        "smith",
        "me@johnsmith.com",
        "4039999999",
        "123 douglas ridge green",
        "calgary",
        "alberta",
        "t2z4j7",
        "canada"
      ],
      "line": 53,
      "id": "createaccount;account-is-missing-individual-mandatory-data;;2"
    },
    {
      "cells": [
        "newuser2",
        "12345678",
        "john",
        "",
        "me@johnsmith.com",
        "4039999999",
        "123 douglas ridge green",
        "calgary",
        "alberta",
        "t2z4j7",
        "canada"
      ],
      "line": 54,
      "id": "createaccount;account-is-missing-individual-mandatory-data;;3"
    },
    {
      "cells": [
        "newuser3",
        "12345678",
        "john",
        "smith",
        "",
        "4039999999",
        "123 douglas ridge green",
        "calgary",
        "alberta",
        "t2z4j7",
        "canada"
      ],
      "line": 55,
      "id": "createaccount;account-is-missing-individual-mandatory-data;;4"
    },
    {
      "cells": [
        "newuser4",
        "12345678",
        "john",
        "smith",
        "me@johnsmith.com",
        "",
        "123 douglas ridge green",
        "calgary",
        "alberta",
        "t2z4j7",
        "canada"
      ],
      "line": 56,
      "id": "createaccount;account-is-missing-individual-mandatory-data;;5"
    },
    {
      "cells": [
        "newuser5",
        "12345678",
        "john",
        "smith",
        "me@johnsmith.com",
        "4039999999",
        "",
        "calgary",
        "alberta",
        "t2z4j7",
        "canada"
      ],
      "line": 57,
      "id": "createaccount;account-is-missing-individual-mandatory-data;;6"
    },
    {
      "cells": [
        "newuser6",
        "12345678",
        "john",
        "smith",
        "me@johnsmith.com",
        "4039999999",
        "123 douglas ridge green",
        "calgary",
        "",
        "t2z4j7",
        "canada"
      ],
      "line": 58,
      "id": "createaccount;account-is-missing-individual-mandatory-data;;7"
    },
    {
      "cells": [
        "newuser7",
        "12345678",
        "john",
        "smith",
        "me@johnsmith.com",
        "4039999999",
        "123 douglas ridge green",
        "calgary",
        "alberta",
        "",
        "canada"
      ],
      "line": 59,
      "id": "createaccount;account-is-missing-individual-mandatory-data;;8"
    },
    {
      "cells": [
        "newuser8",
        "12345678",
        "john",
        "smith",
        "me@johnsmith.com",
        "4039999999",
        "123 douglas ridge green",
        "calgary",
        "alberta",
        "t2z4j7",
        ""
      ],
      "line": 60,
      "id": "createaccount;account-is-missing-individual-mandatory-data;;9"
    },
    {
      "cells": [
        "newuser9",
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
      "line": 61,
      "id": "createaccount;account-is-missing-individual-mandatory-data;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 53,
  "name": "Account is missing individual mandatory data",
  "description": "",
  "id": "createaccount;account-is-missing-individual-mandatory-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I create new account using \"newuser1\" and \"12345678\" and \"\" and \"smith\" and \"me@johnsmith.com\" and \"4039999999\" and \"123 douglas ridge green\" and \"calgary\" and \"alberta\" and \"t2z4j7\" and \"canada\" and press save account information",
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
  "line": 49,
  "name": "I should get an error message that account is missing information",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.i_open_Chrome()"
});
formatter.result({
  "duration": 1158669500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 241294500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 374806401,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 145368900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 149158901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newuser1",
      "offset": 28
    },
    {
      "val": "12345678",
      "offset": 43
    },
    {
      "val": "",
      "offset": 58
    },
    {
      "val": "smith",
      "offset": 65
    },
    {
      "val": "me@johnsmith.com",
      "offset": 77
    },
    {
      "val": "4039999999",
      "offset": 100
    },
    {
      "val": "123 douglas ridge green",
      "offset": 117
    },
    {
      "val": "calgary",
      "offset": 147
    },
    {
      "val": "alberta",
      "offset": 161
    },
    {
      "val": "t2z4j7",
      "offset": 175
    },
    {
      "val": "canada",
      "offset": 188
    }
  ],
  "location": "CreateAccount.i_create_new_account_using_and_and_and_and_and_and_and_and_and_and_and_press_save_account_information(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 676759700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_should_get_an_error_message_that_account_is_missing_information()"
});
formatter.result({
  "duration": 610496001,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Account is missing individual mandatory data",
  "description": "",
  "id": "createaccount;account-is-missing-individual-mandatory-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I create new account using \"newuser2\" and \"12345678\" and \"john\" and \"\" and \"me@johnsmith.com\" and \"4039999999\" and \"123 douglas ridge green\" and \"calgary\" and \"alberta\" and \"t2z4j7\" and \"canada\" and press save account information",
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
  "line": 49,
  "name": "I should get an error message that account is missing information",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.i_open_Chrome()"
});
formatter.result({
  "duration": 1175091700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 210469101,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 344485001,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 124631500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 140642000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newuser2",
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
      "val": "",
      "offset": 69
    },
    {
      "val": "me@johnsmith.com",
      "offset": 76
    },
    {
      "val": "4039999999",
      "offset": 99
    },
    {
      "val": "123 douglas ridge green",
      "offset": 116
    },
    {
      "val": "calgary",
      "offset": 146
    },
    {
      "val": "alberta",
      "offset": 160
    },
    {
      "val": "t2z4j7",
      "offset": 174
    },
    {
      "val": "canada",
      "offset": 187
    }
  ],
  "location": "CreateAccount.i_create_new_account_using_and_and_and_and_and_and_and_and_and_and_and_press_save_account_information(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 675193000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_should_get_an_error_message_that_account_is_missing_information()"
});
formatter.result({
  "duration": 628708400,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Account is missing individual mandatory data",
  "description": "",
  "id": "createaccount;account-is-missing-individual-mandatory-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I create new account using \"newuser3\" and \"12345678\" and \"john\" and \"smith\" and \"\" and \"4039999999\" and \"123 douglas ridge green\" and \"calgary\" and \"alberta\" and \"t2z4j7\" and \"canada\" and press save account information",
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
  "line": 49,
  "name": "I should get an error message that account is missing information",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.i_open_Chrome()"
});
formatter.result({
  "duration": 1181021600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 225357600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 369830200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 133797201,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 149359301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newuser3",
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
      "val": "",
      "offset": 81
    },
    {
      "val": "4039999999",
      "offset": 88
    },
    {
      "val": "123 douglas ridge green",
      "offset": 105
    },
    {
      "val": "calgary",
      "offset": 135
    },
    {
      "val": "alberta",
      "offset": 149
    },
    {
      "val": "t2z4j7",
      "offset": 163
    },
    {
      "val": "canada",
      "offset": 176
    }
  ],
  "location": "CreateAccount.i_create_new_account_using_and_and_and_and_and_and_and_and_and_and_and_press_save_account_information(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 679415500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_should_get_an_error_message_that_account_is_missing_information()"
});
formatter.result({
  "duration": 610195999,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Account is missing individual mandatory data",
  "description": "",
  "id": "createaccount;account-is-missing-individual-mandatory-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I create new account using \"newuser4\" and \"12345678\" and \"john\" and \"smith\" and \"me@johnsmith.com\" and \"\" and \"123 douglas ridge green\" and \"calgary\" and \"alberta\" and \"t2z4j7\" and \"canada\" and press save account information",
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
  "line": 49,
  "name": "I should get an error message that account is missing information",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.i_open_Chrome()"
});
formatter.result({
  "duration": 1177313600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 232090900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 393211800,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 139797500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 143281201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newuser4",
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
      "val": "",
      "offset": 104
    },
    {
      "val": "123 douglas ridge green",
      "offset": 111
    },
    {
      "val": "calgary",
      "offset": 141
    },
    {
      "val": "alberta",
      "offset": 155
    },
    {
      "val": "t2z4j7",
      "offset": 169
    },
    {
      "val": "canada",
      "offset": 182
    }
  ],
  "location": "CreateAccount.i_create_new_account_using_and_and_and_and_and_and_and_and_and_and_and_press_save_account_information(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 679329200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_should_get_an_error_message_that_account_is_missing_information()"
});
formatter.result({
  "duration": 614041900,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Account is missing individual mandatory data",
  "description": "",
  "id": "createaccount;account-is-missing-individual-mandatory-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I create new account using \"newuser5\" and \"12345678\" and \"john\" and \"smith\" and \"me@johnsmith.com\" and \"4039999999\" and \"\" and \"calgary\" and \"alberta\" and \"t2z4j7\" and \"canada\" and press save account information",
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
  "line": 49,
  "name": "I should get an error message that account is missing information",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.i_open_Chrome()"
});
formatter.result({
  "duration": 1187567701,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 236113900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 342341000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 124465700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 141431500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newuser5",
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
      "val": "",
      "offset": 121
    },
    {
      "val": "calgary",
      "offset": 128
    },
    {
      "val": "alberta",
      "offset": 142
    },
    {
      "val": "t2z4j7",
      "offset": 156
    },
    {
      "val": "canada",
      "offset": 169
    }
  ],
  "location": "CreateAccount.i_create_new_account_using_and_and_and_and_and_and_and_and_and_and_and_press_save_account_information(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 657786200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_should_get_an_error_message_that_account_is_missing_information()"
});
formatter.result({
  "duration": 627981800,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Account is missing individual mandatory data",
  "description": "",
  "id": "createaccount;account-is-missing-individual-mandatory-data;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I create new account using \"newuser6\" and \"12345678\" and \"john\" and \"smith\" and \"me@johnsmith.com\" and \"4039999999\" and \"123 douglas ridge green\" and \"calgary\" and \"\" and \"t2z4j7\" and \"canada\" and press save account information",
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
  "line": 49,
  "name": "I should get an error message that account is missing information",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.i_open_Chrome()"
});
formatter.result({
  "duration": 1168288601,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 213551300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 340651700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 125211399,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 143507300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newuser6",
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
      "val": "",
      "offset": 165
    },
    {
      "val": "t2z4j7",
      "offset": 172
    },
    {
      "val": "canada",
      "offset": 185
    }
  ],
  "location": "CreateAccount.i_create_new_account_using_and_and_and_and_and_and_and_and_and_and_and_press_save_account_information(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 721575500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_should_get_an_error_message_that_account_is_missing_information()"
});
formatter.result({
  "duration": 632314901,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.CreateAccount.i_should_get_an_error_message_that_account_is_missing_information(CreateAccount.java:122)\r\n\tat ✽.Then I should get an error message that account is missing information(CreateAccount.feature:49)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 59,
  "name": "Account is missing individual mandatory data",
  "description": "",
  "id": "createaccount;account-is-missing-individual-mandatory-data;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I create new account using \"newuser7\" and \"12345678\" and \"john\" and \"smith\" and \"me@johnsmith.com\" and \"4039999999\" and \"123 douglas ridge green\" and \"calgary\" and \"alberta\" and \"\" and \"canada\" and press save account information",
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
  "line": 49,
  "name": "I should get an error message that account is missing information",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.i_open_Chrome()"
});
formatter.result({
  "duration": 1191076900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 246409200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 388207000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 142041801,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 144356200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newuser7",
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
      "val": "",
      "offset": 179
    },
    {
      "val": "canada",
      "offset": 186
    }
  ],
  "location": "CreateAccount.i_create_new_account_using_and_and_and_and_and_and_and_and_and_and_and_press_save_account_information(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 686657100,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_should_get_an_error_message_that_account_is_missing_information()"
});
formatter.result({
  "duration": 619040900,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Account is missing individual mandatory data",
  "description": "",
  "id": "createaccount;account-is-missing-individual-mandatory-data;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I create new account using \"newuser8\" and \"12345678\" and \"john\" and \"smith\" and \"me@johnsmith.com\" and \"4039999999\" and \"123 douglas ridge green\" and \"calgary\" and \"alberta\" and \"t2z4j7\" and \"\" and press save account information",
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
  "line": 49,
  "name": "I should get an error message that account is missing information",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.i_open_Chrome()"
});
formatter.result({
  "duration": 1206613800,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 209589900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 347248000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 124022400,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 153248500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newuser8",
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
      "val": "",
      "offset": 192
    }
  ],
  "location": "CreateAccount.i_create_new_account_using_and_and_and_and_and_and_and_and_and_and_and_press_save_account_information(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 710674100,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_should_get_an_error_message_that_account_is_missing_information()"
});
formatter.result({
  "duration": 1110912300,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Account is missing individual mandatory data",
  "description": "",
  "id": "createaccount;account-is-missing-individual-mandatory-data;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I create new account using \"newuser9\" and \"12345678\" and \"john\" and \"smith\" and \"me@johnsmith.com\" and \"4039999999\" and \"123 douglas ridge green\" and \"calgary\" and \"alberta\" and \"t2z4j7\" and \"canada\" and press save account information",
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
  "line": 49,
  "name": "I should get an error message that account is missing information",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.i_open_Chrome()"
});
formatter.result({
  "duration": 1181564800,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 213216200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 326004500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 130531300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 138794800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newuser9",
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
  "duration": 727384301,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_should_get_an_error_message_that_account_is_missing_information()"
});
formatter.result({
  "duration": 608861101,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.CreateAccount.i_should_get_an_error_message_that_account_is_missing_information(CreateAccount.java:122)\r\n\tat ✽.Then I should get an error message that account is missing information(CreateAccount.feature:49)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "Account is missing all mandatory data",
  "description": "",
  "id": "createaccount;account-is-missing-all-mandatory-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I create new account using no account information",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I should get an error message that account is missing information",
  "keyword": "Then "
});
formatter.examples({
  "line": 72,
  "name": "",
  "description": "",
  "id": "createaccount;account-is-missing-all-mandatory-data;",
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
      "line": 73,
      "id": "createaccount;account-is-missing-all-mandatory-data;;1"
    },
    {
      "cells": [
        "newuser1",
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
      "line": 74,
      "id": "createaccount;account-is-missing-all-mandatory-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 74,
  "name": "Account is missing all mandatory data",
  "description": "",
  "id": "createaccount;account-is-missing-all-mandatory-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I create new account using no account information",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I should get an error message that account is missing information",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccount.i_open_Chrome()"
});
formatter.result({
  "duration": 1175814900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 246516300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 362492900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 124847600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 135789799,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_create_new_account_using_no_account_information()"
});
formatter.result({
  "duration": 143015099,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_should_get_an_error_message_that_account_is_missing_information()"
});
formatter.result({
  "duration": 628206700,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.CreateAccount.i_should_get_an_error_message_that_account_is_missing_information(CreateAccount.java:122)\r\n\tat ✽.Then I should get an error message that account is missing information(CreateAccount.feature:70)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 76,
  "name": "Account enables mybanner",
  "description": "",
  "id": "createaccount;account-enables-mybanner",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 77,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I create new account with mybanner using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cemail\u003e\" and \"\u003cphone\u003e\" and \"\u003caddress\u003e\" and \"\u003ccity\u003e\" and \"\u003cstate\u003e\" and \"\u003czip\u003e\" and \"\u003ccountry\u003e\" and press save account information",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "I should be able to login successfully using that \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and see a banner",
  "keyword": "Then "
});
formatter.examples({
  "line": 85,
  "name": "",
  "description": "",
  "id": "createaccount;account-enables-mybanner;",
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
      "line": 86,
      "id": "createaccount;account-enables-mybanner;;1"
    },
    {
      "cells": [
        "quality123121",
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
      "line": 87,
      "id": "createaccount;account-enables-mybanner;;2"
    },
    {
      "cells": [
        "quality12312",
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
      "line": 88,
      "id": "createaccount;account-enables-mybanner;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 87,
  "name": "Account enables mybanner",
  "description": "",
  "id": "createaccount;account-enables-mybanner;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 77,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I create new account with mybanner using \"quality123121\" and \"12345678\" and \"john\" and \"smith\" and \"me@johnsmith.com\" and \"4039999999\" and \"123 douglas ridge green\" and \"calgary\" and \"alberta\" and \"t2z4j7\" and \"canada\" and press save account information",
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
  "line": 83,
  "name": "I should be able to login successfully using that \"quality123121\" and \"12345678\" and see a banner",
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
  "duration": 1179325899,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 209399701,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 345882500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 126176601,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 145602099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality123121",
      "offset": 42
    },
    {
      "val": "12345678",
      "offset": 62
    },
    {
      "val": "john",
      "offset": 77
    },
    {
      "val": "smith",
      "offset": 88
    },
    {
      "val": "me@johnsmith.com",
      "offset": 100
    },
    {
      "val": "4039999999",
      "offset": 123
    },
    {
      "val": "123 douglas ridge green",
      "offset": 140
    },
    {
      "val": "calgary",
      "offset": 170
    },
    {
      "val": "alberta",
      "offset": 184
    },
    {
      "val": "t2z4j7",
      "offset": 198
    },
    {
      "val": "canada",
      "offset": 211
    }
  ],
  "location": "CreateAccount.i_create_new_account_with_mybanner_using_and_and_and_and_and_and_and_and_and_and_and_press_save_account_information(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 805820200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality123121",
      "offset": 51
    },
    {
      "val": "12345678",
      "offset": 71
    }
  ],
  "location": "CreateAccount.i_should_be_able_to_login_successfully_using_that_and_and_see_a_banner(String,String)"
});
formatter.result({
  "duration": 19674409401,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "Account enables mybanner",
  "description": "",
  "id": "createaccount;account-enables-mybanner;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 77,
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "I go to Jpetstore page",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I click register now",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I create new account with mybanner using \"quality12312\" and \"12345678\" and \"john\" and \"smith\" and \"me@johnsmith.com\" and \"4039999999\" and \"123 douglas ridge green\" and \"calgary\" and \"alberta\" and \"t2z4j7\" and \"canada\" and press save account information",
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
  "line": 83,
  "name": "I should be able to login successfully using that \"quality12312\" and \"12345678\" and see a banner",
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
  "duration": 1194833501,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_go_to_Jpetstore_page()"
});
formatter.result({
  "duration": 242752399,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_continue_page()"
});
formatter.result({
  "duration": 346158201,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_sign_in()"
});
formatter.result({
  "duration": 134052000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.i_click_register_now()"
});
formatter.result({
  "duration": 140286299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality12312",
      "offset": 42
    },
    {
      "val": "12345678",
      "offset": 61
    },
    {
      "val": "john",
      "offset": 76
    },
    {
      "val": "smith",
      "offset": 87
    },
    {
      "val": "me@johnsmith.com",
      "offset": 99
    },
    {
      "val": "4039999999",
      "offset": 122
    },
    {
      "val": "123 douglas ridge green",
      "offset": 139
    },
    {
      "val": "calgary",
      "offset": 169
    },
    {
      "val": "alberta",
      "offset": 183
    },
    {
      "val": "t2z4j7",
      "offset": 197
    },
    {
      "val": "canada",
      "offset": 210
    }
  ],
  "location": "CreateAccount.i_create_new_account_with_mybanner_using_and_and_and_and_and_and_and_and_and_and_and_press_save_account_information(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 790090800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality12312",
      "offset": 51
    },
    {
      "val": "12345678",
      "offset": 70
    }
  ],
  "location": "CreateAccount.i_should_be_able_to_login_successfully_using_that_and_and_see_a_banner(String,String)"
});
formatter.result({
  "duration": 15914362000,
  "status": "passed"
});
});