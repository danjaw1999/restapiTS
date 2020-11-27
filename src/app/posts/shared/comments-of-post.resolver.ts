import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PostService } from 'src/app/posts/shared/posts.service';

import { Comment } from './../../comments/shared/comment.model';

@Injectable({
    providedIn: 'root'
})
export class CommentsOfPostResolverService implements Resolve<Comment[]>{
    constructor(private postService: PostService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Comment[] | Observable<Comment[]> | Promise<Comment[]> {
        const {id} = route.params;
        return this.postService.fetchPostCom(id);
    }
}