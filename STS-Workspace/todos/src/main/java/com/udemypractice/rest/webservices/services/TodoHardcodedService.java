package com.udemypractice.rest.webservices.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.udemypractice.rest.webservices.beans.Todo;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "zexl", "Learn Japanese", false, new Date()));
		todos.add(new Todo(++idCounter, "zexl", "Learn Spanish", false, new Date()));
		todos.add(new Todo(++idCounter, "zexl", "Learn Chinese", false, new Date()));
	}
	
	public List<Todo> findAll() {
		return todos;
	}
	
	public Todo findById(long id) {
		for (Todo todo:todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
	public Todo save(Todo todo) {
		if (todo.getId()==-1) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if (todo != null) {
			todos.remove(todo);
			// If there are remaining todos at higher id values, move all of them down one to fill in 
			// the gap
//			shiftIds(id);
			return todo;
		} else {
			return null;
		}
	}
	
//	public void shiftIds(long id) {
//		long n = id;
//		while (n < todos.size()) {
//			findById(n).setId(--n);
//			n++;
//		}
//		idCounter--;
//	}

}
