import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Comment } from './../../comments/shared/comment.model';

import { PostsFacade } from '../store/posts.facade';
@Component({
  selector: 'app-post-item-info',
  templateUrl: './post-item-info.component.html',
  styleUrls: ['./post-item-info.component.scss'],
})
export class PostItemInfoComponent implements OnInit {
  post$ = this.postsFacade.post$;
  comments$: Observable<Comment[]>;
  idPost: number;

  constructor(private postsFacade: PostsFacade) { }

  ngOnInit() {
    this.comments$ = this.postsFacade.getCommentsToPost();
  }
}
