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
  
  constructor(private todosFacade : TodosFacade){
    this.todosFacade.getTodos();
  }

}
