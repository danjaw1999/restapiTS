import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from './shared/todo.model';
import { TodosFacade } from './store/todos.facade';

@Component({
  selector: 'app-section',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  todos$: Observable<Todo[]> = this.todosFacade.todos$;
  
  // constructor(private activatedRoute: ActivatedRoute) {
  //   this.todos$ = this.activatedRoute.data.pipe(
  //     map((data: { todos: Todo[] }) => data.todos)
  //   )
  //  }
  constructor(private todosFacade : TodosFacade){
    this.todosFacade.getTodos();
  }
  // ngOnInit() {
  //   this.todos$ = this.mainService.fetchTodos().pipe(
  //     tap(todos => {
  //       this.ids = todos.map(item => item.id);
  //     })
  //   );
  // }
}
