import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PostsComponent } from './posts.component';
import { Error404Component } from '../error404/error404.component';
import { PostsResolverService } from './shared/posts.resolver';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent, resolve: {posts: PostsResolverService}
  },
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }