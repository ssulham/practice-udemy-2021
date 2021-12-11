package com.udemypractice.rest.webservices.basic.auth;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter {
	
	private final Log logger = LogFactory.getLog(WebSecurityConfigurerAdapter.class);
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		this.logger.debug("Using default configure(HttpSecurity). "
				+ "If subclassed this will potentially override subclass configure(HttpSecurity).");
		http
			.csrf().disable()
			.authorizeRequests().antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
				.anyRequest().authenticated();
		http.httpBasic();
//		http
//			.csrf().disable()
//			.authorizeRequests().antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
//				.anyRequest().authenticated().and()
//			.httpBasic();
//		http.cors();
//		http.csrf().disable();
//		http.authorizeRequests((requests) -> requests.anyRequest().authenticated());
//		http.formLogin();
//		http.httpBasic();
		
//		http.csrf().disable();
//		http.authorizeRequests((requests) -> requests.anyRequest().authenticated()
//				.antMatchers(HttpMethod.OPTIONS,"/**").permitAll());
//		http.httpBasic();
	}

}
