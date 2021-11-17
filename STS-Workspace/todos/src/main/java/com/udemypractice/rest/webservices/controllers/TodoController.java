package com.udemypractice.rest.webservices.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.udemypractice.rest.webservices.beans.Todo;
import com.udemypractice.rest.webservices.services.TodoHardcodedService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoController {
	
	@Autowired
	private TodoHardcodedService todoService;
	
	@GetMapping(path = "/users/{username}/todos")
	public List<Todo> getTodos(@PathVariable String username) {
		return todoService.findAll();
	}
	
	@GetMapping(path = "/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable long id) {
		return todoService.findById(id);
	}
	
	// POST /users/{username}/todos
	@PostMapping(path = "/users/{username}/todos")
	//More to come...
	
	// PUT /users/{username}/todos/{todo}
	@PutMapping(path = "/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(
			@PathVariable String username, 
			@PathVariable long id,
			@RequestBody Todo todo) {
		Todo todoUpdated = todoService.save(todo);
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	// DELETE /users/{username}/todos/{todo}
	@DeleteMapping(path = "/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
		Todo todo = todoService.deleteById(id);
		if (todo != null) {
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}

}
