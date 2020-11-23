import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PostsComponent } from './posts.component';
import { Error404Component } from '../error404/error404.component';
import { PostsResolverService } from './shared/posts.resolver';
import { PostItemInfoComponent } from './post-item-info/post-item-info.component';
import { PostResolverService } from './shared/post.resolver';
import { CommentsOfPostResolverService } from './shared/comments-of-post.resolver';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent, resolve: {posts: PostsResolverService}
  },
  {path: ':id', component: PostItemInfoComponent, resolve: {post: PostResolverService, comments: CommentsOfPostResolverService}},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }