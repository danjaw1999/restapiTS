import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PostsComponent } from './posts.component';
import { Error404Component } from '../error404/error404.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }