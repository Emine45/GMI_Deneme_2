$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_015Transactions.feature");
formatter.feature({
  "name": "System should allow user to manage their account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.background({
  "name": "US_015 Balance populations",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should go to homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_15_Step_Definitions.user_should_go_to_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks my Operations link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_15_Step_Definitions.user_clicks_my_Operations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks my accounts",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_15_Step_Definitions.user_clicks_manage_accounts()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should see all account types and balance populated",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@US15_TC01"
    }
  ]
});
formatter.step({
  "name": "user can see all account types and balance populated",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_15_Step_Definitions.can_user_see_all_account_types_and_balance_populated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_15_Step_Definitions.user_signOut()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "US_015 Balance populations",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should go to homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_15_Step_Definitions.user_should_go_to_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks my Operations link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_15_Step_Definitions.user_clicks_my_Operations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks my accounts",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US_15_Step_Definitions.user_clicks_manage_accounts()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can view transaction",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@US15_TC02"
    }
  ]
});
formatter.step({
  "name": "user can see all view transaction",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US_15_Step_Definitions.can_user_see_all_transaction()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US_15_Step_Definitions.user_signOut()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});