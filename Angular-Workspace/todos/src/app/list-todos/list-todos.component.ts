import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../A-Beans/todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  successMessage: string = "";

  todos!: Todo[];

  // todos = [
  //   new Todo(1, "Learn Japanese", false, new Date()),
  //   new Todo(2, "Learn Spanish", false, new Date()),
  //   new Todo(3, "Learn Chinese", false, new Date())
  // ];

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos("zexl").subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  add() {
    console.log("Adding To Do List Item...");
    this.router.navigate(['updateTodo', -1]);
    this.refreshTodos();
  }

  update(id: number) {
    console.log(`Updateing To Do Item ${id}...`);
    this.router.navigate(['updateTodo', id]);
  }

  delete(id: number) {
    console.log(`To Do Item ${id} Deleted.`);
    this.todoService.deleteTodo("zexl", id).subscribe(
      response => {
        console.log(response);
        this.successMessage = `To Do List Item ${id} Deleted.`;
        this.refreshTodos();
      }
    )
  }

}
