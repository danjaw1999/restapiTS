import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { getOnePost } from '../selectors/posts.selectors';

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
  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
    this.post$ = activatedRoute.params.pipe(
      map((data: { id: number }) => +data.id),
      mergeMap((id) => this.store.select(getOnePost(id)))
    )

    this.comments$ = this.activatedRoute.data.pipe(
      map((data: { comments: CommentsOfPost[] }) => data.comments)
    );
  }
}
