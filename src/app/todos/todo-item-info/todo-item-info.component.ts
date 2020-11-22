import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item-info',
  templateUrl: './todo-item-info.component.html',
  styleUrls: ['./todo-item-info.component.scss'],
})
export class TodoItemInfoComponent {
  todo$: Observable<Todo>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.todo$ = this.activatedRoute.data.pipe(
      map((data: { todo: Todo }) => data.todo)
    );
  }
}
