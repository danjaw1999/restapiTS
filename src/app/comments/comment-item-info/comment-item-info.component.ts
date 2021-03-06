import { Component } from '@angular/core';

import { CommentsFacade } from '../store/comments.facade';

@Component({
  selector: 'app-comment-item-info',
  templateUrl: './comment-item-info.component.html',
  styleUrls: ['./comment-item-info.component.scss']
})
export class CommentItemInfoComponent {
  comment$ = this.commentsFacade.comment$;

  constructor(private commentsFacade: CommentsFacade) {}
}


