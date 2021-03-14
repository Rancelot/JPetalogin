Feature: CreateAccount
  Scenario Outline: Successful creation of an account
    Given I open Chrome
    And I go to Jpetstore page
    And I click continue
    And I click sign in
    And I click register now
    When I create new account using "<username>" and "<password>" and "<firstname>" and "<lastname>" and "<email>" and "<phone>" and "<address>" and "<city>" and "<state>" and "<zip>" and "<country>" and press save account information
    Then I should be able to login successfully using that "<username>" and "<password>"

    Examples: 
      | username	| password    | firstname	| lastname	| email	| phone	| address	| city	| state	|	zip	|	country	|
      | validusername@domain.com	| Secret! |	john	| smith	|	me@johnsmith.com	|	4039999999	|	123 douglas ridge green	|	calgary	| alberta	| t2z4j7	|	canada	|
      | validUserName	| ValidPassword |	john	| smith	|	me@johnsmith.com	|	4039999999	|	123 douglas ridge green	|	calgary	| alberta	| t2z4j7	|	canada	|
      | quality3	| 12345678 |	john	| smith	|	me@johnsmith.com	|	4039999999	|	123 douglas ridge green	|	calgary	| alberta	| t2z4j7	|	canada	|

