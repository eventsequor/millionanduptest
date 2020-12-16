package com.eder.millionandup.stepdefinitios;

import com.eder.millionandup.ManagerDriver;
import com.eder.millionandup.pages.PageLogin;
import com.eder.millionandup.pages.PageSearch;

public class Hook {
	private ManagerDriver mgDriver;
	private PageLogin pgLogin;
	private String url;
	private String browser;
	private PageSearch pgSearch;

	public Hook() {
		mgDriver = null;
		pgLogin = null;
		url = null;
		browser = null;
		pgSearch = null;
	}

	public ManagerDriver getMgDriver() {
		return mgDriver;
	}

	public void setMgDriver(ManagerDriver mgDriver) {
		System.out.println(">>>>- " + mgDriver.getUrlPagina());
		this.mgDriver = mgDriver;
	}

	public PageLogin getPgLogin() {
		return pgLogin;
	}

	public void setPgLogin(PageLogin pgLogin) {
		this.pgLogin = pgLogin;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getBrowser() {
		return browser;
	}

	public void setBrowser(String browser) {
		this.browser = browser;
	}

	public PageSearch getPgSearch() {
		return pgSearch;
	}

	public void setPgSearch(PageSearch pgSearch) {
		this.pgSearch = pgSearch;
	}
}
