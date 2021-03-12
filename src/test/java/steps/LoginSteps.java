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
	
	@Given("^I open Chrome browser$")
	public void i_open_Chrome_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "chrome/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@Given("^I go to Facebook page$")
	public void i_go_to_Facebook_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("http://www.facebook.com");
	}

	@When("^I enter valid \"([^\"]*)\" and \"([^\"]*)\" combination and press login button$")
	public void i_enter_valid_and_combination_and_press_login_button(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("email")).sendKeys(arg1);
		driver.findElement(By.name("pass")).sendKeys(arg2);
		driver.findElement(By.cssSelector("[type='submit']")).click();
	}

	@Then("^I should be able to login successfully$")
	public void i_should_be_able_to_login_successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			WebElement element = driver.findElement(By.linkText("Home"));
		} catch (Exception e) {
			fail();
		} finally {
			driver.quit();
		}
	}

}
