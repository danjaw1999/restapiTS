import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

// import { PostsComponent } from "./posts/posts.component";
// import { TodosComponent } from "./todos/todos.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},  
  {path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)},
  {path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)}
  // {path: 'todos', component: TodosComponent},
  // {path: 'posts', component: PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
