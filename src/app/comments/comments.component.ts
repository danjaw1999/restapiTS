import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Comment } from './shared/comment.model'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  comments$: Observable<Comment[]>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.comments$ = this.activatedRoute.data.pipe(
      map((data: {comments: Comment[]}) => data.comments)
    )
   }
}
