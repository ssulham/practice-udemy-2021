package com.udemypractice.rest.webservices.beans;

public class BasicAuthenticationBean {
	
	// Fields
	private String message;

	// Constructors
	public BasicAuthenticationBean(String message) {
		super();
		this.message = message;
	}

	// Getters and Setters
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
