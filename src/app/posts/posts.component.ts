import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './store/post.actions';
import { map } from 'rxjs/operators'

import { Post } from './shared/post.model';

@Component({
  selector: 'app-header',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent  {  
  posts$: Observable<Post[]>;
  count$: Observable<number>

  constructor(private activatedRoute: ActivatedRoute, private store: Store<{count: number}>) {
    this.count$ = store.select('count');
    this.posts$ = this.activatedRoute.data.pipe(
      map((data: { posts: Post[]}) => data.posts)
    );
  }
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}
