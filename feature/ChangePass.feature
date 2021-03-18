Feature: ChangePass
  Scenario Outline: Successful Password Change - Login using new password
    Given I open Chrome browser 
    And go to JPetStore
    And I log in using "<username>" and "<currPassword>"
    And I navigate to My Account
    When I enter a new valid "<password>" and "<confirmation>" and press Save Account Information button
    Then I should be able to login using "<username>" and my new "<newPassword>"

    Examples: 
    	|	username	|	currPassword	|	password	|	confirmation	|	newPassword		|
      |	quality2	|	12345678	|	newsecret |	newsecret	|	newsecret | 
      |	quality2	|	newsecret	|	S3cretP@sswØrd |	S3cretP@sswØrd	|	S3cretP@sswØrd | 
      |	quality2	|	S3cretP@sswØrd	|	12345678 |	12345678	|	12345678 | 
      
 Scenario Outline: Successful Password Change - Login using previous password
    Given I open Chrome browser 
    And go to JPetStore
    And I log in using "<username>" and "<currPassword>"
    And I navigate to My Account
    When I enter a new valid "<password>" and "<confirmation>" and press Save Account Information button
    Then I should not be able to login using "<username>" and my new "<oldPassword>"

    Examples: 
    	|	username	|	currPassword	|	password	|	confirmation	|	newPassword		|
      |	quality2	|	12345678	|	newsecret |	newsecret	|	12345678 | 
      |	quality2	|	newsecret	|	12345678 |	12345678	|	newsecret | 
      