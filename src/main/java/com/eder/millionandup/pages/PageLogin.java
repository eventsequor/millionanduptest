package com.eder.millionandup.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;

public class PageLogin extends PageFactory {

	public PageLogin(WebDriver webDriver) {
		PageFactory.initElements(new AjaxElementLocatorFactory(webDriver, 10), this);
	}

	@FindBy(name = "username")
	private WebElement textBoxUserName;

	@FindBy(name = "password")
	private WebElement textBoxPassword;

	@FindBy(name = "FormsButton2")
	private WebElement buttonSave;

	@FindBy(xpath = "/html/body/table/tbody/tr/td[1]/blockquote/blockquote[2]/blockquote")
	private WebElement labelResultTest;

	public void setUserName(String userName) {
		textBoxUserName.sendKeys(userName);
	}

	public void setPassword(String password) {
		textBoxPassword.sendKeys(password);
	}

	public void clickButtonSave() {
		buttonSave.click();
	}

	public String takeUsernameFromScreen() {
		String name = labelResultTest.getText().split("The password:")[0];
		return name.replace("The username:", "").trim();
	}

	public String takePasswordFromScreen() {
		String name = labelResultTest.getText().split("The password:")[1];
		return name.trim();
	}

}
