import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';

import { getOnePost } from '../selectors/posts.selectors';
import { getComments } from '../selectors/comments.selector';

import { Comment } from './../../comments/shared/comment.model';
import { Post } from '../shared/post.model';

import { PostService } from 'src/app/posts/shared/posts.service';
@Component({
  selector: 'app-post-item-info',
  templateUrl: './post-item-info.component.html',
  styleUrls: ['./post-item-info.component.scss'],
})
export class PostItemInfoComponent {
  post$: Observable<Post>;
  comments$: Observable<Comment[]>;
  idPost: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private postService: PostService
  ) {
    this.comments$ = activatedRoute.params.pipe(
      map((data: { id: number }) => {
        this.idPost = data.id;
        return +data.id;
      }),
      mergeMap((id) => this.store.select(getComments(id))),
      mergeMap((d) => {
        let comment: Observable<Comment[]>;
        if (d.length === 0) {
          comment = this.postService.fetchPostCom(this.idPost);
        } else {
          comment = of(d);
        }
        return comment;
      })
    );

    this.post$ = this.activatedRoute.params.pipe(
      map((data: { id: number }) => {
        this.idPost = data.id;
        return +data.id;
      }),
      mergeMap((id) => this.store.select(getOnePost(id))),
      mergeMap((d) => {
        let post: Observable<Post>;
        if (!d) {
          post = this.postService.fetchPost(this.idPost);
        } else {
          post = of(d);
        }
        return post;
      })
    );
  }
}
