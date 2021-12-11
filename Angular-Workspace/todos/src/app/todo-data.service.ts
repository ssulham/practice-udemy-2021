import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './A-Beans/todo';
import { API_URL } from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  // Method to retrieve all todos
  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  // Method to retrieve one todo
  retrieveTodo(username: string, id: number) {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  // Method to create a new todo
  createTodo(username: string, todo: Todo) {
    return this.http.post(`${API_URL}/users/${username}/todos`, todo);
  }

  // Method to update a todo
  updateTodo(username: string, id: number, todo: Todo) {
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  // Method to delete a todo
  deleteTodo(username: string, id: number) {
    return this.http.delete<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

}
