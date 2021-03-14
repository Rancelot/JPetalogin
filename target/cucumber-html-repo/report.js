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
  "name": "I go to Jpetastore page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I click sign in and enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" combination and press login button",
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
        "quality1",
        "12345678"
      ],
      "line": 10,
      "id": "login;successful-login;;2"
    },
    {
      "cells": [
        "invalidUserName",
        "invalidPassword"
      ],
      "line": 11,
      "id": "login;successful-login;;3"
    },
    {
      "cells": [
        "test@gmail.com",
        "3r$kvfZ"
      ],
      "line": 12,
      "id": "login;successful-login;;4"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 13,
      "id": "login;successful-login;;5"
    },
    {
      "cells": [
        "quality1",
        "invalidPassword"
      ],
      "line": 14,
      "id": "login;successful-login;;6"
    },
    {
      "cells": [
        "invalidUsername",
        "12345678"
      ],
      "line": 15,
      "id": "login;successful-login;;7"
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
  "name": "I go to Jpetastore page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I click sign in and enter valid \"quality1\" and \"12345678\" combination and press login button",
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
  "duration": 3564632000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_Jpetastore_page()"
});
formatter.result({
  "duration": 1561454600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality1",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 48
    }
  ],
  "location": "LoginSteps.i_click_sign_in_and_enter_valid_and_combination_and_press_login_button(String,String)"
});
formatter.result({
  "duration": 1534796600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1313512200,
  "status": "passed"
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
  "name": "I go to Jpetastore page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I click sign in and enter valid \"invalidUserName\" and \"invalidPassword\" combination and press login button",
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
  "duration": 1791380900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_Jpetastore_page()"
});
formatter.result({
  "duration": 3386453600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalidUserName",
      "offset": 33
    },
    {
      "val": "invalidPassword",
      "offset": 55
    }
  ],
  "location": "LoginSteps.i_click_sign_in_and_enter_valid_and_combination_and_press_login_button(String,String)"
});
formatter.result({
  "duration": 591136100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 710514800,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.LoginSteps.i_should_be_able_to_login_successfully(LoginSteps.java:61)\r\n\tat ✽.Then I should be able to login successfully(Login.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 12,
  "name": "Successful login",
  "description": "",
  "id": "login;successful-login;;4",
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
  "name": "I go to Jpetastore page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I click sign in and enter valid \"test@gmail.com\" and \"3r$kvfZ\" combination and press login button",
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
  "duration": 1589747800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_Jpetastore_page()"
});
formatter.result({
  "duration": 1065184300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 33
    },
    {
      "val": "3r$kvfZ",
      "offset": 54
    }
  ],
  "location": "LoginSteps.i_click_sign_in_and_enter_valid_and_combination_and_press_login_button(String,String)"
});
formatter.result({
  "duration": 472275100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 637360400,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.LoginSteps.i_should_be_able_to_login_successfully(LoginSteps.java:61)\r\n\tat ✽.Then I should be able to login successfully(Login.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "Successful login",
  "description": "",
  "id": "login;successful-login;;5",
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
  "name": "I go to Jpetastore page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I click sign in and enter valid \"\" and \"\" combination and press login button",
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
  "duration": 1360758000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_Jpetastore_page()"
});
formatter.result({
  "duration": 1272404000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "LoginSteps.i_click_sign_in_and_enter_valid_and_combination_and_press_login_button(String,String)"
});
formatter.result({
  "duration": 567282500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1034650500,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.LoginSteps.i_should_be_able_to_login_successfully(LoginSteps.java:61)\r\n\tat ✽.Then I should be able to login successfully(Login.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "Successful login",
  "description": "",
  "id": "login;successful-login;;6",
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
  "name": "I go to Jpetastore page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I click sign in and enter valid \"quality1\" and \"invalidPassword\" combination and press login button",
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
  "duration": 1542484900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_Jpetastore_page()"
});
formatter.result({
  "duration": 2166674700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality1",
      "offset": 33
    },
    {
      "val": "invalidPassword",
      "offset": 48
    }
  ],
  "location": "LoginSteps.i_click_sign_in_and_enter_valid_and_combination_and_press_login_button(String,String)"
});
formatter.result({
  "duration": 4033612900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1788300000,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.LoginSteps.i_should_be_able_to_login_successfully(LoginSteps.java:61)\r\n\tat ✽.Then I should be able to login successfully(Login.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "Successful login",
  "description": "",
  "id": "login;successful-login;;7",
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
  "name": "I go to Jpetastore page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I click sign in and enter valid \"invalidUsername\" and \"12345678\" combination and press login button",
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
  "duration": 2140515400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_Jpetastore_page()"
});
formatter.result({
  "duration": 2448109400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalidUsername",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 55
    }
  ],
  "location": "LoginSteps.i_click_sign_in_and_enter_valid_and_combination_and_press_login_button(String,String)"
});
formatter.result({
  "duration": 4881640000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1774382700,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.LoginSteps.i_should_be_able_to_login_successfully(LoginSteps.java:61)\r\n\tat ✽.Then I should be able to login successfully(Login.feature:6)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Failed login",
  "description": "",
  "id": "login;failed-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I go to Jpetastore page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click sign in and enter invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" combination and press login button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should receive an error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login;failed-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "login;failed-login;;1"
    },
    {
      "cells": [
        "quality1",
        "12345678"
      ],
      "line": 25,
      "id": "login;failed-login;;2"
    },
    {
      "cells": [
        "invalidUserName",
        "invalidPassword"
      ],
      "line": 26,
      "id": "login;failed-login;;3"
    },
    {
      "cells": [
        "test@gmail.com",
        "3r$kvfZ"
      ],
      "line": 27,
      "id": "login;failed-login;;4"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 28,
      "id": "login;failed-login;;5"
    },
    {
      "cells": [
        "quality1",
        "invalidPassword"
      ],
      "line": 29,
      "id": "login;failed-login;;6"
    },
    {
      "cells": [
        "invalidUsername",
        "12345678"
      ],
      "line": 30,
      "id": "login;failed-login;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Failed login",
  "description": "",
  "id": "login;failed-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I go to Jpetastore page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click sign in and enter invalid \"quality1\" and \"12345678\" combination and press login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should receive an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_Chrome_browser()"
});
formatter.result({
  "duration": 1910509600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_Jpetastore_page()"
});
formatter.result({
  "duration": 2078221200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality1",
      "offset": 35
    },
    {
      "val": "12345678",
      "offset": 50
    }
  ],
  "location": "LoginSteps.i_click_sign_in_and_enter_invalid_and_combination_and_press_login_button(String,String)"
});
formatter.result({
  "duration": 3158571100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_receive_an_error_message()"
});
formatter.result({
  "duration": 1599779700,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.LoginSteps.i_should_receive_an_error_message(LoginSteps.java:74)\r\n\tat ✽.Then I should receive an error message(Login.feature:21)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 26,
  "name": "Failed login",
  "description": "",
  "id": "login;failed-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I go to Jpetastore page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click sign in and enter invalid \"invalidUserName\" and \"invalidPassword\" combination and press login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should receive an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_Chrome_browser()"
});
formatter.result({
  "duration": 1919718300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_Jpetastore_page()"
});
formatter.result({
  "duration": 2315269700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalidUserName",
      "offset": 35
    },
    {
      "val": "invalidPassword",
      "offset": 57
    }
  ],
  "location": "LoginSteps.i_click_sign_in_and_enter_invalid_and_combination_and_press_login_button(String,String)"
});
formatter.result({
  "duration": 3889831000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_receive_an_error_message()"
});
formatter.result({
  "duration": 1420650800,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Failed login",
  "description": "",
  "id": "login;failed-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I go to Jpetastore page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click sign in and enter invalid \"test@gmail.com\" and \"3r$kvfZ\" combination and press login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should receive an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_Chrome_browser()"
});
formatter.result({
  "duration": 1840316100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_Jpetastore_page()"
});
formatter.result({
  "duration": 4659732100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 35
    },
    {
      "val": "3r$kvfZ",
      "offset": 56
    }
  ],
  "location": "LoginSteps.i_click_sign_in_and_enter_invalid_and_combination_and_press_login_button(String,String)"
});
formatter.result({
  "duration": 3907287700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_receive_an_error_message()"
});
formatter.result({
  "duration": 1458430800,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Failed login",
  "description": "",
  "id": "login;failed-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I go to Jpetastore page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click sign in and enter invalid \"\" and \"\" combination and press login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should receive an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_Chrome_browser()"
});
formatter.result({
  "duration": 2653541300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_Jpetastore_page()"
});
formatter.result({
  "duration": 4279845000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 35
    },
    {
      "val": "",
      "offset": 42
    }
  ],
  "location": "LoginSteps.i_click_sign_in_and_enter_invalid_and_combination_and_press_login_button(String,String)"
});
formatter.result({
  "duration": 2547160200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_receive_an_error_message()"
});
formatter.result({
  "duration": 1423939700,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.LoginSteps.i_should_receive_an_error_message(LoginSteps.java:74)\r\n\tat ✽.Then I should receive an error message(Login.feature:21)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 29,
  "name": "Failed login",
  "description": "",
  "id": "login;failed-login;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I go to Jpetastore page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click sign in and enter invalid \"quality1\" and \"invalidPassword\" combination and press login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should receive an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_Chrome_browser()"
});
formatter.result({
  "duration": 1893914300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_Jpetastore_page()"
});
formatter.result({
  "duration": 3973812600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality1",
      "offset": 35
    },
    {
      "val": "invalidPassword",
      "offset": 50
    }
  ],
  "location": "LoginSteps.i_click_sign_in_and_enter_invalid_and_combination_and_press_login_button(String,String)"
});
formatter.result({
  "duration": 2063400900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_receive_an_error_message()"
});
formatter.result({
  "duration": 1351507700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Failed login",
  "description": "",
  "id": "login;failed-login;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I go to Jpetastore page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click sign in and enter invalid \"invalidUsername\" and \"12345678\" combination and press login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should receive an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_Chrome_browser()"
});
formatter.result({
  "duration": 1986858500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_Jpetastore_page()"
});
formatter.result({
  "duration": 1983545400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalidUsername",
      "offset": 35
    },
    {
      "val": "12345678",
      "offset": 57
    }
  ],
  "location": "LoginSteps.i_click_sign_in_and_enter_invalid_and_combination_and_press_login_button(String,String)"
});
formatter.result({
  "duration": 1731091000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_receive_an_error_message()"
});
formatter.result({
  "duration": 1374952300,
  "status": "passed"
});
});