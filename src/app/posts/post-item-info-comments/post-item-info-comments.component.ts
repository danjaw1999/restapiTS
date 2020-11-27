import { Component, Input } from '@angular/core';
import { Comment } from './../../comments/shared/comment.model';

@Component({
  selector: 'app-post-item-info-comments',
  templateUrl: './post-item-info-comments.component.html',
  styleUrls: ['./post-item-info-comments.component.scss']
})
export class PostItemInfoCommentsComponent {
  @Input() comments: Comment[];
}
