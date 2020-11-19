import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MainService } from '../main.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-section',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;
  
  constructor(private mainService: MainService) { }
  
  ngOnInit() {
    this.todos$ = this.mainService.fetchTodos();
  }
}
