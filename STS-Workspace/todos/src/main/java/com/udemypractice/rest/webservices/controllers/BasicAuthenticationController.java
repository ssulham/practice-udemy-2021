package com.udemypractice.rest.webservices.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.udemypractice.rest.webservices.beans.BasicAuthenticationBean;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {
	
	@GetMapping(path = "/basicauth")
	public BasicAuthenticationBean basicAuthenticationBean() {
		return new BasicAuthenticationBean("You are authenticated");
	}

}
