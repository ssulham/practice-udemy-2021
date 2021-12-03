import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id!=-1) {
      this.todo = new Todo(this.id, "Loading...", false, new Date());
      this.todoService.retrieveTodo('zexl', this.id).subscribe(
        data => this.todo = data
      )
    } else {
      this.todo = new Todo(this.id, "Enter To Do List Item", false, new Date());
    }
  }

  saveTodo() {
    if(this.id == -1) {
      // Create Todo
      this.todoService.createTodo('zexl', this.todo).subscribe(
        data => console.log(data)
      )
      this.router.navigate(['listTodos']);
    } else {
      // Update Todo
      this.todoService.updateTodo('zexl', this.id, this.todo).subscribe(
        data => console.log(data)
      )
      this.router.navigate(['listTodos']);
    }
    
  }

}
