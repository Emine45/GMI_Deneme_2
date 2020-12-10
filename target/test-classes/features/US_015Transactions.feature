@Smoke
Feature: System should allow user to manage their account

  Background: US_015 Balance populations
    Given User should go to homePage
#    When clicks person icon
#    When clicks sign in button
#    And enters customer username
#    And enters customer password
#    Then clicks sign in box
    And user clicks my Operations link
    And user clicks my accounts


  @US15_TC01
  Scenario: User should see all account types and balance populated
    Given user can see all account types and balance populated
    Then user signOut



  @US15_TC02
  Scenario: User can view transaction
    Given user can see all view transaction
    Then user signOut

