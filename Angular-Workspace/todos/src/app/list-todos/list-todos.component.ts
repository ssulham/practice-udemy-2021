import { Component, OnInit } from '@angular/core';
import { Todo } from '../A-Beans/todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, "Learn Japanese", false, new Date()),
    new Todo(2, "Learn Spanish", false, new Date()),
    new Todo(3, "Learn Chinese", false, new Date())
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
