package com.eder.millionandup;

/**
 * Hello world!
 *
 */
public class App {
	public static void main(String[] args) {
		String texto = "The username: fdgghgfhgf\r\n" + "The password: dfgdfg";
		String name = texto.split("The password:")[1];
		System.out.println(name);
	}
}
