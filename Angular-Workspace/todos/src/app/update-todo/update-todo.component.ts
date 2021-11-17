import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../A-Beans/todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  id!: number;
  todo!: Todo;

  constructor(
    private todoService: TodoDataService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.todo = new Todo(0, "Loading...", false, new Date());
    this.todoService.retrieveTodo('zexl', this.id).subscribe(
      data => this.todo = data
    )
  }

  saveTodo() {
    // More to come in time...
  }

}
