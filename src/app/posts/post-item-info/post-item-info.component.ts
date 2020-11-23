import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CommentsOfPost } from '../shared/comments-of-post.model';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-post-item-info',
  templateUrl: './post-item-info.component.html',
  styleUrls: ['./post-item-info.component.scss']
})
export class PostItemInfoComponent {
  post$: Observable<Post>;
  comments$: Observable<CommentsOfPost[]>;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.post$ = this.activatedRoute.data.pipe(
      map((data: {post: Post}) => data.post)
    );
    this.comments$ = this.activatedRoute.data.pipe(
      map((data: {comments: CommentsOfPost[]}) => {
        return data.comments
      })
    );
  }
}
