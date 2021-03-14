package steps;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateAccount {
	
	WebDriver driver;
	
	@Given("^I open Chrome$")
	public void i_open_Chrome() throws Throwable {
		 // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "chrome/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	@Given("^I go to Jpetstore page$")
	public void i_go_to_Jpetstore_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("http://35.222.38.92:8080/jpetstore/");
	}
	@Given("^I click continue$")
	public void i_click_continue_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.linkText("Enter the Store")).click();
	}

	@Given("^I click sign in$")
	public void i_click_sign_in() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.linkText("Sign In")).click();
	}

	@Given("^I click register now$")
	public void i_click_register_now() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.linkText("Register Now!")).click();
	}

	@When("^I create new account using \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and press save account information$")
	public void i_create_new_account_using_and_and_and_and_and_and_and_and_and_and_and_press_save_account_information(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7, String arg8, String arg9, String arg10, String arg11) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("username")).sendKeys(arg1);
		driver.findElement(By.name("password")).sendKeys(arg2);
		driver.findElement(By.name("repeatedPassword")).sendKeys(arg2);
		driver.findElement(By.name("account.firstName")).sendKeys(arg3);
		driver.findElement(By.name("account.lastName")).sendKeys(arg4);
		driver.findElement(By.name("account.email")).sendKeys(arg5);
		driver.findElement(By.name("account.phone")).sendKeys(arg6);
		driver.findElement(By.name("account.address1")).sendKeys(arg7);
		driver.findElement(By.name("account.city")).sendKeys(arg8);
		driver.findElement(By.name("account.state")).sendKeys(arg9);
		driver.findElement(By.name("account.zip")).sendKeys(arg10);
		driver.findElement(By.name("account.country")).sendKeys(arg11);
		
		driver.findElement(By.name("newAccount")).click();
	}
	
	@Then("^I should be able to login successfully using that \\\"([^\\\"]*)\\\" and \\\"([^\\\"]*)\\\"$")
	public void i_should_be_able_to_login_successfully_using_that_and(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.linkText("Sign In")).click();
			driver.findElement(By.name("username")).sendKeys(arg1);
			driver.findElement(By.name("password")).clear();
			driver.findElement(By.name("password")).sendKeys(arg2);
			driver.findElement(By.name("signon")).click();
			
			driver.findElement(By.linkText("Sign Out")).click();
		}
		catch (Exception e) {
			fail();
		} finally {
			driver.quit();
		}
		
	}
}
