import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators'

import { Todo } from './shared/todo.model';

@Component({
  selector: 'app-section',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  ids: number[];
  todos$: Observable<Todo[]>;
  
  constructor(private activatedRoute: ActivatedRoute) {
    this.todos$ = this.activatedRoute.data.pipe(
      map((data: { todos: Todo[] }) => data.todos)
    )
   }
  
  // ngOnInit() {
  //   this.todos$ = this.mainService.fetchTodos().pipe(
  //     tap(todos => {
  //       this.ids = todos.map(item => item.id);
  //     })
  //   );
  // }
}
