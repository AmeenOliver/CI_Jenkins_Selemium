$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "Test login Scenario",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SMOKESCENARION"
    }
  ]
});
formatter.scenario({
  "name": "check login successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SMOKESCENARION"
    },
    {
      "name": "@SMOKETEST"
    }
  ]
});
formatter.step({
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.LoginStep.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.LoginStep.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on button submit",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.LoginStep.click_on_button_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.LoginStep.user_is_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "check login successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "click on button submit",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "user1",
        "pass1"
      ]
    },
    {
      "cells": [
        "user2",
        "pass2"
      ]
    },
    {
      "cells": [
        "user3",
        "pass3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "check login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SMOKESCENARION"
    }
  ]
});
formatter.step({
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.LoginStep.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters user1 and pass1",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.LoginStep.user_enters_user1_and_pass1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on button submit",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.LoginStep.click_on_button_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.LoginStep.user_is_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "check login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SMOKESCENARION"
    }
  ]
});
formatter.step({
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.LoginStep.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters user2 and pass2",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.LoginStep.user_enters_user2_and_pass2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on button submit",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.LoginStep.click_on_button_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.LoginStep.user_is_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "check login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SMOKESCENARION"
    }
  ]
});
formatter.step({
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.LoginStep.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters user3 and pass3",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.LoginStep.user_enters_user3_and_pass3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on button submit",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.LoginStep.click_on_button_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.LoginStep.user_is_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
});