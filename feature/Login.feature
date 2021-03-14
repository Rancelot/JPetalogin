Feature: Login
  Scenario Outline: Successful login
    Given I open Chrome browser
    And I go to Facebook page
    When I enter valid "<username>" and "<password>" combination and press login button
    Then I should be able to login successfully

    Examples: 
      | username	| password    |
      | validusername@domain.com	| Secret! |
      | validUserName	| ValidPassword |
