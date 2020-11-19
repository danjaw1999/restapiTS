import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from "./posts/posts.component";
import { TodosComponent } from "./todos/todos.component";

const routes: Routes = [
  {path: 'todos', component: TodosComponent},
  {path: 'posts', component: PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
