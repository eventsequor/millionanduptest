package com.eder.millionandup;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(monochrome = true, plugin = { "pretty", "html:target/cucumber-reports" },
		features = "src\\test\\resources\\Features",
		glue = "com.eder.millionandup.stepdefinitios")
public class Runner {

}