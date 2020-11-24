import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CommentsComponent } from './comments.component';
import { CommentItemInfoComponent } from './comment-item-info/comment-item-info.component';
import { CommentResolverService } from './shared/comment.resolver';




const routes: Routes = [
  {
    path: '',
    component: CommentsComponent
  },
  {
    path: ':id', component: CommentItemInfoComponent, resolve: {comment: CommentResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }