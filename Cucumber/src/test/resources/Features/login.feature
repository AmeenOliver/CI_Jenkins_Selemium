@SMOKESCENARION
Feature: Test login Scenario

	@SMOKETEST
  Scenario: check login successfully
    Given user is in login page
    When user enters username and password
    And click on button submit
    Then user is navigated to home page

  Scenario Outline: check login successfully
    Given user is in login page
    When user enters <username> and <password>
    And click on button submit
    Then user is navigated to home page

    Examples: 
      | username | password |
      | user1    | pass1    |
      | user2    | pass2    |
      | user3    | pass3    |
