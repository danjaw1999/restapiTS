import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Post } from './shared/post.model';

@Component({
  selector: 'app-header',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent  {  
  posts$: Observable<Post[]>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.posts$ = this.activatedRoute.data.pipe(
      map((data: { posts: Post[]}) => data.posts)
    );
  }

}
