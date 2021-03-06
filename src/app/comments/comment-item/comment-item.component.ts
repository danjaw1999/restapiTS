import { Component, Input } from '@angular/core';

import { Comment } from './../shared/comment.model'

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})

export class CommentItemComponent {
  @Input() comment: Comment;
}