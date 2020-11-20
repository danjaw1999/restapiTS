import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CommentsComponent } from "./comments.component";
import { CommentsRoutingModule } from "./comments-routing.module";
import { CommentListComponent } from "./comment-list/comment-list.component";
import { CommentItemComponent } from "./comment-item/comment-item.component";
// import { CommentItemInfoComponent } from './comment-item-info/comment-item-info.component';

@NgModule({
    imports: [
        CommonModule,
        CommentsRoutingModule
    ],
    declarations: [
        CommentsComponent,
        CommentListComponent,
        CommentItemComponent,
        // CommentItemInfoComponent
    ]
})
export class CommentsModule {};