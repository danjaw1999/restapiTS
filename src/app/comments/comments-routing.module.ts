import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CommentsComponent } from './comments.component';
import { CommentItemInfoComponent } from './comment-item-info/comment-item-info.component';

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent
  },
  {
    path: ':id', component: CommentItemInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }