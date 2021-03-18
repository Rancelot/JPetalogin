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
    
    Scenario Outline: Account passwords do not match
    Given I open Chrome
    And I go to Jpetstore page
    And I click continue
    And I click sign in
    And I click register now
    When I create new account using "<username>" and "<password>" and "<password2>" and "<firstname>" and "<lastname>" and "<email>" and "<phone>" and "<address>" and "<city>" and "<state>" and "<zip>" and "<country>" and press save account information
    Then I should get an error message that passwords do not match
    
    Examples:
    | username	| password    | password2 | firstname	| lastname	| email	| phone	| address	| city	| state	|	zip	|	country	|
    | quality1234	| 12345678 | 87654321 |	john	| smith	|	me@johnsmith.com	|	4039999999	|	123 douglas ridge green	|	calgary	| alberta	| t2z4j7	|	canada	|
    
    Scenario Outline: Account has already been made
    Given I open Chrome
    And I go to Jpetstore page
    And I click continue
    And I click sign in
    And I click register now
    When I create new account using "<username>" and "<password>" and "<firstname>" and "<lastname>" and "<email>" and "<phone>" and "<address>" and "<city>" and "<state>" and "<zip>" and "<country>" and press save account information
    Then I should get an error message that account could not be created
    
    Examples:
    | username	| password    | firstname	| lastname	| email	| phone	| address	| city	| state	|	zip	|	country	|
    | quality3	| 12345678 |	john	| smith	|	me@johnsmith.com	|	4039999999	|	123 douglas ridge green	|	calgary	| alberta	| t2z4j7	|	canada	|
    
    Scenario Outline: Account is missing individual mandatory data
    Given I open Chrome
    And I go to Jpetstore page
    And I click continue
    And I click sign in
    And I click register now
    When I create new account using "<username>" and "<password>" and "<firstname>" and "<lastname>" and "<email>" and "<phone>" and "<address>" and "<city>" and "<state>" and "<zip>" and "<country>" and press save account information
    Then I should get an error message that account is missing information
    
    Examples:
    | username	| password    | firstname	| lastname	| email	| phone	| address	| city	| state	|	zip	|	country	|
    | newuser1	| 12345678 |		| smith	|	me@johnsmith.com	|	4039999999	|	123 douglas ridge green	|	calgary	| alberta	| t2z4j7	|	canada	|
    | newuser2	| 12345678 |	john	| 	|	me@johnsmith.com	|	4039999999	|	123 douglas ridge green	|	calgary	| alberta	| t2z4j7	|	canada	|
    | newuser3	| 12345678 |	john	| smith	|		|	4039999999	|	123 douglas ridge green	|	calgary	| alberta	| t2z4j7	|	canada	|
    | newuser4	| 12345678 |	john	| smith	|	me@johnsmith.com	|		|	123 douglas ridge green	|	calgary	| alberta	| t2z4j7	|	canada	|
    | newuser5	| 12345678 |	john	| smith	|	me@johnsmith.com	|	4039999999	|		|	calgary	| alberta	| t2z4j7	|	canada	|
    | newuser6	| 12345678 |	john	| smith	|	me@johnsmith.com	|	4039999999	|	123 douglas ridge green	|	calgary	| 	| t2z4j7	|	canada	|
    | newuser7	| 12345678 |	john	| smith	|	me@johnsmith.com	|	4039999999	|	123 douglas ridge green	|	calgary	| alberta	| 	|	canada	|
    | newuser8	| 12345678 |	john	| smith	|	me@johnsmith.com	|	4039999999	|	123 douglas ridge green	|	calgary	| alberta	| t2z4j7	|		|
    | newuser9	| 12345678 |	john	| smith	|	me@johnsmith.com	|	4039999999	|	123 douglas ridge green	|	calgary	| alberta	| t2z4j7	|	canada	|
    
    Scenario Outline: Account is missing all mandatory data
    Given I open Chrome
    And I go to Jpetstore page
    And I click continue
    And I click sign in
    And I click register now
    When I create new account using no account information
    Then I should get an error message that account is missing information
    
    Examples:
    | username	| password    | firstname	| lastname	| email	| phone	| address	| city	| state	|	zip	|	country	|
    | newuser1	| 12345678 |	john	| smith	|	me@johnsmith.com	|	4039999999	|	123 douglas ridge green	|	calgary	| alberta	| t2z4j7	|	canada	|
    
    Scenario Outline: Account enables mybanner
    Given I open Chrome
    And I go to Jpetstore page
    And I click continue
    And I click sign in
    And I click register now
    When I create new account with mybanner using "<username>" and "<password>" and "<firstname>" and "<lastname>" and "<email>" and "<phone>" and "<address>" and "<city>" and "<state>" and "<zip>" and "<country>" and press save account information
    Then I should be able to login successfully using that "<username>" and "<password>" and see a banner
    
    Examples:
    | username	| password    | firstname	| lastname	| email	| phone	| address	| city	| state	|	zip	|	country	|
    | quality123121	| 12345678 |	john	| smith	|	me@johnsmith.com	|	4039999999	|	123 douglas ridge green	|	calgary	| alberta	| t2z4j7	|	canada	|