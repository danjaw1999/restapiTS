import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { MainService } from '../main.service';
import { Todo } from '../models/todo.model';



@Component({
  selector: 'app-section',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: Todo[];
  subscription: Subscription;
  
  constructor(private mainService: MainService) { }
  
  ngOnInit() {
    this.subscription = this.mainService.fetchTodos().subscribe((data: Todo[]) => {
      this.todos = data;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    console.log('Todos Destroy');
  }


}
