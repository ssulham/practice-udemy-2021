package com.udemypractice.rest.webservices.beans;

import java.util.Date;
import java.util.Objects;

public class Todo {
	
	// Fields
	private long id;
	private String username;
	private String description;
	private boolean completed;
	private Date targetDate;
	
	// Constructors
	public Todo() {
		// No Args Constructor
	}
	
	public Todo(long id, String username, String description, boolean completed, Date targetDate) {
		// Full Args Constructor
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.completed = completed;
		this.targetDate = targetDate;
	}
	
	// Getters and Setters
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public boolean isCompleted() {
		return completed;
	}
	public void setCompleted(boolean completed) {
		this.completed = completed;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}

	// Hash and Equals Methods
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Todo other = (Todo) obj;
		return id == other.id;
	}
}
