import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TodosComponent } from './todos.component';
import { TodosResolverService } from './shared/todos.resolver';
import { TodoResolverService } from './shared/todo.resovler';
import { TodoItemInfoComponent } from './todo-item-info/todo-item-info.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    resolve: { todos: TodosResolverService },
  },
  {
    path: ':id',
    component: TodoItemInfoComponent,
    resolve: { todo: TodoResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
