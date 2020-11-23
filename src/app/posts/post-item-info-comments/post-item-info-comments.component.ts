import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CommentsOfPost } from '../shared/comments-of-post.model';

@Component({
  selector: 'app-post-item-info-comments',
  templateUrl: './post-item-info-comments.component.html',
  styleUrls: ['./post-item-info-comments.component.scss']
})
export class PostItemInfoCommentsComponent {
  comments$: Observable<CommentsOfPost[]>;
  constructor(private activatedRoute: ActivatedRoute) {
    this.comments$ = this.activatedRoute.data.pipe(
      map((data: {comments: CommentsOfPost[]}) => data.comments)
    )
   }
}
