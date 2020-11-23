import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PostService } from 'src/app/posts/shared/posts.service';
import { ComOfPost } from './comments-of-post.model';

@Injectable({
    providedIn: 'root'
})
export class CommentsOfPostResolverService implements Resolve<ComOfPost>{
    constructor(private postService: PostService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ComOfPost | Observable<ComOfPost> | Promise<ComOfPost> {
        const {id} = route.params;
        return this.postService.fetchPostCom(id);
    }
}