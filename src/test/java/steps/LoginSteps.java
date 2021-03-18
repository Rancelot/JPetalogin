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

public class LoginSteps {
	
	WebDriver driver;
	
	@Given("^I open Chrome browser2$")
	public void i_open_Chrome_browser2() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "chrome/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@Given("^I go to Jpetastore page$")
	public void i_go_to_Jpetastore_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("http://35.222.38.92:8080/jpetstore/");
		driver.findElement(By.tagName("a")).click();
	}

	@When("^I click sign in and enter valid \"([^\"]*)\" and \"([^\"]*)\" combination and press login button$")
	public void i_click_sign_in_and_enter_valid_and_combination_and_press_login_button(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.linkText("Sign In")).click();
		driver.findElement(By.name("username")).sendKeys(arg1);
		driver.findElement(By.name("password")).clear();		//clears the 4 character placeholder password
		driver.findElement(By.name("password")).sendKeys(arg2);
		driver.findElement(By.name("signon")).click();
	}

	@When("^I click sign in and enter invalid \"([^\"]*)\" and \"([^\"]*)\" combination and press login button$")
	public void i_click_sign_in_and_enter_invalid_and_combination_and_press_login_button(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.linkText("Sign In")).click();
		driver.findElement(By.name("username")).sendKeys(arg1);
		driver.findElement(By.name("password")).clear();		//clears the 4 character placeholder password
		driver.findElement(By.name("password")).sendKeys(arg2);
		driver.findElement(By.name("signon")).click();
	}
	
	@Then("^I should be able to login successfully$")
	public void i_should_be_able_to_login_successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.linkText("My Account"));	//My account link can only be accessed if user signed in successfully
			assertTrue(true);
		} catch (Exception e) {
			fail();
		} finally {
			driver.quit();
		}
	}

	@Then("^I should receive an error message$")
	public void i_should_receive_an_error_message() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.cssSelector(".messages"));	//existence of ul tag with messages class means error message of wrong credentials is displayed 
			assertTrue(true);
		} catch (Exception e) {
			fail();
		} finally {
			driver.quit();
		}
	}

}
