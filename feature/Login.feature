Feature: Login
  Scenario Outline: Successful login
    Given I open Chrome browser2
    And I go to Jpetastore page
    When I click sign in and enter valid "<username>" and "<password>" combination and press login button
    Then I should be able to login successfully

    Examples: 
      |username|password|
      |quality1|12345678|
      | invalidUserName	| invalidPassword |
      |test@gmail.com|3r$kvfZ|
      | | |
      |quality1|invalidPassword|
      |invalidUsername|12345678|

	Scenario Outline: Failed login
		Given I open Chrome browser2
		And I go to Jpetastore page
		When I click sign in and enter invalid "<username>" and "<password>" combination and press login button
		Then I should receive an error message
		
    Examples: 
      |username|password|
      |quality1|12345678|
      | invalidUserName	| invalidPassword |
      |test@gmail.com|3r$kvfZ|
      | | |
      |quality1|invalidPassword|
      |invalidUsername|12345678| 
      
      
      