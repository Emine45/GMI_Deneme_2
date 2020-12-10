package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import pages.US_15_Page;
import utilities.ConfigReader;
import utilities.Driver;

import java.sql.ResultSet;
import java.util.List;


public class US_15_Step_Definitions {
    US_15_Page us_15_page=new US_15_Page();


    @Given("User should go to homePage")
    public void user_should_go_to_homePage() {
//        Driver.getDriver().get(ConfigReader.getProperty("url"));
        Driver.loginAll("customer");
    }

//    @When("clicks person icon")
//    public void clicks_person_icon() {
//        Driver.clickWithTimeOut(us_15_page.menuButton,3);
//    }
//
//    @When("clicks sign in button")
//    public void clicks_sign_in_button() {
//        Driver.clickWithTimeOut(us_15_page.signIn,3);
//    }
//
//    @When("enters customer username")
//    public void enters_customer_username() {
//        Driver.wait(1);
//        us_15_page.username.sendKeys(ConfigReader.getProperty("CustomerUsername"));
//    }
//
//    @When("enters customer password")
//    public void enters_customer_password() {
//        Driver.wait(1);
//        us_15_page.password.sendKeys(ConfigReader.getProperty("CustomerPassword"));
//    }
//
//    @Then("clicks sign in box")
//    public void clicks_sign_in_box() {
//        Driver.wait(1);
//        us_15_page.submitSignInButton.click();
//    }

    @Then("user clicks my Operations link")
    public void user_clicks_my_Operations_link() {
        Driver.wait(1);
        us_15_page.myOperationsButton.click();
    }

    @Then("user clicks my accounts")
    public void user_clicks_manage_accounts() {
        Driver.wait(1);
        us_15_page.myAccountsButton.click();
    }

    @Given("user can see all account types and balance populated")
    public void can_user_see_all_account_types_and_balance_populated() {
        for(WebElement each:us_15_page.accountType) {
            System.out.println(each.getText());
        }

        for(WebElement each:us_15_page.accountBalance) {
            System.out.println(each.getText());
        }
        Driver.wait(1);
        Assert.assertTrue(us_15_page.accountType.size()>0);
        Assert.assertTrue(us_15_page.accountBalance.size()>0);

    }

    @Then("user signOut")
    public void user_signOut() {
        us_15_page.usernameValidate.click();
        Driver.wait(2);
        us_15_page.singOutButton.click();
        Driver.wait(1);

    }

    @Given("user can see all view transaction")
    public void can_user_see_all_transaction() {

        us_15_page.viewTransactionButton.click();
        Driver.wait(1);
        for (WebElement eachAccount:us_15_page.transactions) {
            System.out.println(eachAccount.getText());
        }
        Driver.wait(2);
        us_15_page.viewTransactionButton2.click();
        Driver.wait(2);
        for (WebElement each:us_15_page.transactions2) {
            System.out.println(each.getText());
        }
        //     Assert.assertTrue(us_15_page.transactions.size()>0);



    }




}