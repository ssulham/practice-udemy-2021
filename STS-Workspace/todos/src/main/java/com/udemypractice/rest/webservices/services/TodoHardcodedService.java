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
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if (todo != null) {
			todos.remove(todo);
			return todo;
		} else {
			return null;
		}
	}

}
