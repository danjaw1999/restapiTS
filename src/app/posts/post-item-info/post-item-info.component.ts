import { Component, OnInit } from '@angular/core';

import { PostsFacade } from '../store/posts.facade';
import { CommentsFacade } from 'src/app/comments/store/comments.facade';
@Component({
  selector: 'app-post-item-info',
  templateUrl: './post-item-info.component.html',
  styleUrls: ['./post-item-info.component.scss'],
})
export class PostItemInfoComponent {
  post$ = this.postsFacade.post$;
  comments$ = this.commentsFacade.getCommentsForPost();
  idPost: number;

  constructor(private postsFacade: PostsFacade, private commentsFacade: CommentsFacade) { }
}
