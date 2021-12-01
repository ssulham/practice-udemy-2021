import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './A-Beans/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  // Method to retrieve all todos
  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  retrieveTodo(username: string, id: number) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  // Method to update a todo
  updateTodo(username: string, id: number, todo: Todo) {
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }

  // Method to delete a todo
  deleteTodo(username: string, id: number) {
    return this.http.delete<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

}
