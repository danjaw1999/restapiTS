import { Component, Input } from '@angular/core';

import { Comment } from './../shared/comment.model';

@Component({
  selector: 'app-comment-item-info',
  templateUrl: './comment-item-info.component.html',
  styleUrls: ['./comment-item-info.component.scss']
})
export class CommentItemInfoComponent{
  @Input() comment: Comment;
}
