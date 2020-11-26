import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodosFacade } from '../store/todos.facade';
@Component({
  selector: 'app-todo-item-info',
  templateUrl: './todo-item-info.component.html',
  styleUrls: ['./todo-item-info.component.scss'],
})
export class TodoItemInfoComponent {
  todo$ = this.todosFacade.todo$; 

  constructor(private todosFacade : TodosFacade) { }
}
