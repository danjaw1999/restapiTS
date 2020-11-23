import { Component, Input } from '@angular/core';
import { CommentsOfPost } from '../shared/comments-of-post.model';

@Component({
  selector: 'app-post-item-info-comments',
  templateUrl: './post-item-info-comments.component.html',
  styleUrls: ['./post-item-info-comments.component.scss']
})
export class PostItemInfoCommentsComponent {
  @Input() comments: CommentsOfPost[];
}
