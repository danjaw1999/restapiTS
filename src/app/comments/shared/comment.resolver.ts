import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CommentsService } from './comments.service';
import { Comment } from './comment.model';



@Injectable({
  providedIn: 'root',
})
export class CommentResolverService implements Resolve<Comment>{
    constructor(private commentsService: CommentsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Comment| Observable<Comment> | Promise<Comment> {
      const {id} = route.params;

      return this.commentsService.fetchComment(id)
    }
  }