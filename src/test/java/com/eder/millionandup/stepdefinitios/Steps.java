package com.eder.millionandup.stepdefinitios;

import static org.junit.Assert.assertEquals;

import org.junit.Before;

import com.eder.millionandup.ManagerDriver;
import com.eder.millionandup.pages.PageLogin;
import com.eder.millionandup.pages.PageSearch;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps extends Hook {

	public Steps() {
		super();
	}
	
	@Before
	public void precondition() {
		
	}

	@Given("^The browser \"([^\"]*)\"$")
	public void getTheBrowser(String browser) throws Throwable {
		setBrowser(browser);
	}

	@Given("^The page with url \"([^\"]*)\"$")
	public void getTheUrl(String url) throws Throwable {
		setUrl(url);
	}

	@Then("^The user start the browser$")
	public void startBrowser() throws Throwable {
		setMgDriver(new ManagerDriver(getBrowser(), getUrl()));
		getMgDriver().navegarAPagina();
	}

	@Then("^The user set user \"([^\"]*)\"$")
	public void the_user_set_user(String user) throws Throwable {
		setPgLogin(new PageLogin(getMgDriver().getWebDriver()));
		getPgLogin().setUserName(user);
	}

	@Then("^The user set password \"([^\"]*)\"$")
	public void the_user_set_password(String password) throws Throwable {
		getPgLogin().setPassword(password);
	}

	@When("^The user validates that the user \"([^\"]*)\" entered is the same as what is seen on the screen$")
	public void validateUser(String user) throws Throwable {
		assertEquals(user, getPgLogin().takeUsernameFromScreen());
	}

	@When("^The user validates that the password \"([^\"]*)\" entered is the same as what is seen on the screen$")
	public void validatePassword(String password) throws Throwable {
		assertEquals(password, getPgLogin().takePasswordFromScreen());
	}

	@Then("^The user clicks on the save button$")
	public void clickOverButtonSave() {
		getPgLogin().clickButtonSave();
	}

	@Then("^The user closes the browser$")
	public void closeBrowser() {
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		getMgDriver().cerrarNavegador();
	}

	@Then("^User searches for \"([^\"]*)\"$")
	public void searchesFor(String word) {
		setPgSearch(new PageSearch(getMgDriver().getWebDriver()));
		getPgSearch().searchWord(word);
	}

	@When("^The user validates that the result quantity must be \"(\\d+)\"$")
	public void validateNumberProducts(int number) {
		assertEquals(number, getPgSearch().numberProduct());
	}

}
