package com.eder.millionandup.pages;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;

public class PageSearch {

	public PageSearch(WebDriver webDriver) {
		PageFactory.initElements(new AjaxElementLocatorFactory(webDriver, 10), this);
	}

	@FindBy(id = "search_query_top")
	private WebElement textBoxSearch;

	@FindBy(className = "product-container")
	List<WebElement> listProducts;

	public void searchWord(String word) {
		textBoxSearch.sendKeys(word);
		textBoxSearch.submit();
	}

	public int numberProduct() {
		return listProducts.size();
	}
}
