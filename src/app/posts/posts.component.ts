import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from './shared/post.model';
import { PostsFacade } from './store/posts.facade';

@Component({
  selector: 'app-header',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent  {  
  posts$: Observable<Post[]> = this.postsFacade.posts$;

  constructor(private postsFacade: PostsFacade) {
    this.postsFacade.getPosts();
  }
}
