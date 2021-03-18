$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ChangePass.feature");
formatter.feature({
  "line": 1,
  "name": "ChangePass",
  "description": "",
  "id": "changepass",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Successful Password Change - Login using new password",
  "description": "",
  "id": "changepass;successful-password-change---login-using-new-password",
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
  "name": "go to JPetStore",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I log in using \"\u003cusername\u003e\" and \"\u003ccurrPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to My Account",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter a new valid \"\u003cpassword\u003e\" and \"\u003cconfirmation\u003e\" and press Save Account Information button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be able to login using \"\u003cusername\u003e\" and my new \"\u003cnewPassword\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "changepass;successful-password-change---login-using-new-password;",
  "rows": [
    {
      "cells": [
        "username",
        "currPassword",
        "password",
        "confirmation",
        "newPassword"
      ],
      "line": 11,
      "id": "changepass;successful-password-change---login-using-new-password;;1"
    },
    {
      "cells": [
        "quality2",
        "12345678",
        "newsecret",
        "newsecret",
        "newsecret"
      ],
      "line": 12,
      "id": "changepass;successful-password-change---login-using-new-password;;2"
    },
    {
      "cells": [
        "quality2",
        "newsecret",
        "S3cretP@sswØrd",
        "S3cretP@sswØrd",
        "S3cretP@sswØrd"
      ],
      "line": 13,
      "id": "changepass;successful-password-change---login-using-new-password;;3"
    },
    {
      "cells": [
        "quality2",
        "S3cretP@sswØrd",
        "12345678",
        "12345678",
        "12345678"
      ],
      "line": 14,
      "id": "changepass;successful-password-change---login-using-new-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Successful Password Change - Login using new password",
  "description": "",
  "id": "changepass;successful-password-change---login-using-new-password;;2",
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
  "name": "go to JPetStore",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I log in using \"quality2\" and \"12345678\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to My Account",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter a new valid \"newsecret\" and \"newsecret\" and press Save Account Information button",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be able to login using \"quality2\" and my new \"newsecret\"",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ChangePassSteps.i_open_Chrome_browser()"
});
formatter.result({
  "duration": 1919014900,
  "status": "passed"
});
formatter.match({
  "location": "ChangePassSteps.go_to_JPetStore()"
});
formatter.result({
  "duration": 1221221600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality2",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 31
    }
  ],
  "location": "ChangePassSteps.i_log_in_using_and(String,String)"
});
formatter.result({
  "duration": 529288300,
  "status": "passed"
});
formatter.match({
  "location": "ChangePassSteps.i_navigate_to_My_Account()"
});
formatter.result({
  "duration": 152025600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newsecret",
      "offset": 21
    },
    {
      "val": "newsecret",
      "offset": 37
    }
  ],
  "location": "ChangePassSteps.i_enter_a_new_valid_and_and_press_Save_Account_Information_button(String,String)"
});
formatter.result({
  "duration": 292811700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality2",
      "offset": 33
    },
    {
      "val": "newsecret",
      "offset": 55
    }
  ],
  "location": "ChangePassSteps.i_should_be_able_to_login_using_and_my_new(String,String)"
});
formatter.result({
  "duration": 1296291000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successful Password Change - Login using new password",
  "description": "",
  "id": "changepass;successful-password-change---login-using-new-password;;3",
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
  "name": "go to JPetStore",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I log in using \"quality2\" and \"newsecret\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to My Account",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter a new valid \"S3cretP@sswØrd\" and \"S3cretP@sswØrd\" and press Save Account Information button",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be able to login using \"quality2\" and my new \"S3cretP@sswØrd\"",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ChangePassSteps.i_open_Chrome_browser()"
});
formatter.result({
  "duration": 1197362200,
  "status": "passed"
});
formatter.match({
  "location": "ChangePassSteps.go_to_JPetStore()"
});
formatter.result({
  "duration": 1222828300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality2",
      "offset": 16
    },
    {
      "val": "newsecret",
      "offset": 31
    }
  ],
  "location": "ChangePassSteps.i_log_in_using_and(String,String)"
});
formatter.result({
  "duration": 514980700,
  "status": "passed"
});
formatter.match({
  "location": "ChangePassSteps.i_navigate_to_My_Account()"
});
formatter.result({
  "duration": 149312800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S3cretP@sswØrd",
      "offset": 21
    },
    {
      "val": "S3cretP@sswØrd",
      "offset": 42
    }
  ],
  "location": "ChangePassSteps.i_enter_a_new_valid_and_and_press_Save_Account_Information_button(String,String)"
});
formatter.result({
  "duration": 304187700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality2",
      "offset": 33
    },
    {
      "val": "S3cretP@sswØrd",
      "offset": 55
    }
  ],
  "location": "ChangePassSteps.i_should_be_able_to_login_using_and_my_new(String,String)"
});
formatter.result({
  "duration": 1301828100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Successful Password Change - Login using new password",
  "description": "",
  "id": "changepass;successful-password-change---login-using-new-password;;4",
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
  "name": "go to JPetStore",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I log in using \"quality2\" and \"S3cretP@sswØrd\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to My Account",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter a new valid \"12345678\" and \"12345678\" and press Save Account Information button",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be able to login using \"quality2\" and my new \"12345678\"",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ChangePassSteps.i_open_Chrome_browser()"
});
formatter.result({
  "duration": 1182576800,
  "status": "passed"
});
formatter.match({
  "location": "ChangePassSteps.go_to_JPetStore()"
});
formatter.result({
  "duration": 1242237200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality2",
      "offset": 16
    },
    {
      "val": "S3cretP@sswØrd",
      "offset": 31
    }
  ],
  "location": "ChangePassSteps.i_log_in_using_and(String,String)"
});
formatter.result({
  "duration": 508154900,
  "status": "passed"
});
formatter.match({
  "location": "ChangePassSteps.i_navigate_to_My_Account()"
});
formatter.result({
  "duration": 150995900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 21
    },
    {
      "val": "12345678",
      "offset": 36
    }
  ],
  "location": "ChangePassSteps.i_enter_a_new_valid_and_and_press_Save_Account_Information_button(String,String)"
});
formatter.result({
  "duration": 296020700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality2",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 55
    }
  ],
  "location": "ChangePassSteps.i_should_be_able_to_login_using_and_my_new(String,String)"
});
formatter.result({
  "duration": 1257041100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Successful Password Change - Login using previous password",
  "description": "",
  "id": "changepass;successful-password-change---login-using-previous-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "go to JPetStore",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I log in using \"\u003cusername\u003e\" and \"\u003ccurrPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I navigate to My Account",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter a new valid \"\u003cpassword\u003e\" and \"\u003cconfirmation\u003e\" and press Save Account Information button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should not be able to login using \"\u003cusername\u003e\" and my new \"\u003coldPassword\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "changepass;successful-password-change---login-using-previous-password;",
  "rows": [
    {
      "cells": [
        "username",
        "currPassword",
        "password",
        "confirmation",
        "newPassword"
      ],
      "line": 25,
      "id": "changepass;successful-password-change---login-using-previous-password;;1"
    },
    {
      "cells": [
        "quality2",
        "12345678",
        "newsecret",
        "newsecret",
        "12345678"
      ],
      "line": 26,
      "id": "changepass;successful-password-change---login-using-previous-password;;2"
    },
    {
      "cells": [
        "quality2",
        "newsecret",
        "12345678",
        "12345678",
        "newsecret"
      ],
      "line": 27,
      "id": "changepass;successful-password-change---login-using-previous-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Successful Password Change - Login using previous password",
  "description": "",
  "id": "changepass;successful-password-change---login-using-previous-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "go to JPetStore",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I log in using \"quality2\" and \"12345678\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I navigate to My Account",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter a new valid \"newsecret\" and \"newsecret\" and press Save Account Information button",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should not be able to login using \"quality2\" and my new \"\u003coldPassword\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ChangePassSteps.i_open_Chrome_browser()"
});
formatter.result({
  "duration": 1199131800,
  "status": "passed"
});
formatter.match({
  "location": "ChangePassSteps.go_to_JPetStore()"
});
formatter.result({
  "duration": 1262285100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality2",
      "offset": 16
    },
    {
      "val": "12345678",
      "offset": 31
    }
  ],
  "location": "ChangePassSteps.i_log_in_using_and(String,String)"
});
formatter.result({
  "duration": 534471000,
  "status": "passed"
});
formatter.match({
  "location": "ChangePassSteps.i_navigate_to_My_Account()"
});
formatter.result({
  "duration": 155367600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newsecret",
      "offset": 21
    },
    {
      "val": "newsecret",
      "offset": 37
    }
  ],
  "location": "ChangePassSteps.i_enter_a_new_valid_and_and_press_Save_Account_Information_button(String,String)"
});
formatter.result({
  "duration": 300315500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality2",
      "offset": 37
    },
    {
      "val": "\u003coldPassword\u003e",
      "offset": 59
    }
  ],
  "location": "ChangePassSteps.i_should_not_be_able_to_login_using_and_my_new(String,String)"
});
formatter.result({
  "duration": 1344765800,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Successful Password Change - Login using previous password",
  "description": "",
  "id": "changepass;successful-password-change---login-using-previous-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "go to JPetStore",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I log in using \"quality2\" and \"newsecret\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I navigate to My Account",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter a new valid \"12345678\" and \"12345678\" and press Save Account Information button",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should not be able to login using \"quality2\" and my new \"\u003coldPassword\u003e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ChangePassSteps.i_open_Chrome_browser()"
});
formatter.result({
  "duration": 1195336400,
  "status": "passed"
});
formatter.match({
  "location": "ChangePassSteps.go_to_JPetStore()"
});
formatter.result({
  "duration": 1263987300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality2",
      "offset": 16
    },
    {
      "val": "newsecret",
      "offset": 31
    }
  ],
  "location": "ChangePassSteps.i_log_in_using_and(String,String)"
});
formatter.result({
  "duration": 560339700,
  "status": "passed"
});
formatter.match({
  "location": "ChangePassSteps.i_navigate_to_My_Account()"
});
formatter.result({
  "duration": 151151300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 21
    },
    {
      "val": "12345678",
      "offset": 36
    }
  ],
  "location": "ChangePassSteps.i_enter_a_new_valid_and_and_press_Save_Account_Information_button(String,String)"
});
formatter.result({
  "duration": 300873800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality2",
      "offset": 37
    },
    {
      "val": "\u003coldPassword\u003e",
      "offset": 59
    }
  ],
  "location": "ChangePassSteps.i_should_not_be_able_to_login_using_and_my_new(String,String)"
});
formatter.result({
  "duration": 1245905200,
  "status": "passed"
});
});