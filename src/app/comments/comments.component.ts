import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Comment } from './shared/comment.model'
import { CommentsFacade } from './store/comments.facade';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  comments$: Observable<Comment[]> = this.commentsFacade.comments$;

  constructor(private commentsFacade: CommentsFacade){
    this.commentsFacade.getComments();
  }
}
