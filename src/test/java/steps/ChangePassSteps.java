package steps;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ChangePassSteps {
	
	WebDriver driver;

	@Given("^I open Chrome browser$")
	public void i_open_Chrome_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "chrome/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	@Given("^go to JPetStore$")
	public void go_to_JPetStore() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("http://35.222.38.92:8080/jpetstore/");
		driver.findElement(By.linkText("Enter the Store")).click();
	}

	@Given("^I log in using \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_log_in_using_and(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.linkText("Sign In")).click();
		driver.findElement(By.name("username")).sendKeys(arg1);
		driver.findElement(By.name("password")).clear();
		driver.findElement(By.name("password")).sendKeys(arg2);
		driver.findElement(By.name("signon")).click();
	}

	@Given("^I navigate to My Account$")
	public void i_navigate_to_My_Account() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.linkText("My Account")).click();
	}

	@When("^I enter a new valid \"([^\"]*)\" and \"([^\"]*)\" and press Save Account Information button$")
	public void i_enter_a_new_valid_and_and_press_Save_Account_Information_button(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("password")).sendKeys(arg1);
	    driver.findElement(By.name("repeatedPassword")).sendKeys(arg2);
	    driver.findElement(By.name("editAccount")).click();
	}

	@Then("^I should be able to login using \"([^\"]*)\" and my new \"([^\"]*)\"$")
	public void i_should_be_able_to_login_using_and_my_new(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.linkText("Sign Out")).click();
			i_log_in_using_and(arg1, arg2);
			assertTrue(driver.findElement(By.linkText("My Account")).isDisplayed());
		} catch (Exception e) {
			fail();
		} finally {
			driver.quit();
		}
	}
	
	@Then("^I should not be able to login using \"([^\"]*)\" and my new \"([^\"]*)\"$")
	public void i_should_not_be_able_to_login_using_and_my_new(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.linkText("Sign Out")).click();
			i_log_in_using_and(arg1, arg2);
			assertTrue(driver.findElement(By.cssSelector(".messages")).isDisplayed());
		} catch (Exception e) {
			fail();
		} finally {
			driver.quit();
		}
	}
}
