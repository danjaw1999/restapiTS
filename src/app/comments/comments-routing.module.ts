import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CommentsComponent } from './comments.component';
import { CommentsResolverService } from './shared/comments.resolver';
import { CommentItemInfoComponent } from './comment-item-info/comment-item-info.component';




const routes: Routes = [
  {
    path: '',
    component: CommentsComponent, resolve: {comments: CommentsResolverService}
  },
  // {
  //   path: ':id', component: CommentItemInfoComponent, resolve: {comments: CommentsResolverService}
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }