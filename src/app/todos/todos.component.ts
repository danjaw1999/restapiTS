import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { MainService } from '../main.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-section',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  ids: number[];
  todos$: Observable<Todo[]>;
  
  constructor(private mainService: MainService) { }
  
  ngOnInit() {
    this.todos$ = this.mainService.fetchTodos().pipe(
      tap(todos => {
        this.ids = todos.map(item => item.id);
      })
    );
  }
}
