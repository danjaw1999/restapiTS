import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/posts/shared/posts.service';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsResolverService implements Resolve<Post[]>{
  constructor(private postsService: PostService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post[] | Observable<Post[]> | Promise<Post[]> {
    return this.postsService.fetchPosts();
  }

}
