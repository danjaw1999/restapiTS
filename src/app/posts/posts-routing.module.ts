import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PostsComponent } from './posts.component';
import { Error404Component } from '../error404/error404.component';
import { PostItemInfoComponent } from './post-item-info/post-item-info.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {path: ':id', component: PostItemInfoComponent},
  // {path: ':id', component: PostItemInfoComponent, resolve: {post: PostResolverService, comments: CommentsOfPostResolverService}},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }