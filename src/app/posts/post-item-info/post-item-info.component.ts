import { Component } from '@angular/core';

import { PostsFacade } from '../store/posts.facade';
@Component({
  selector: 'app-post-item-info',
  templateUrl: './post-item-info.component.html',
  styleUrls: ['./post-item-info.component.scss'],
})
export class PostItemInfoComponent {
  post$ = this.postsFacade.post$;
  comments$ = this.postsFacade.comments$;
  idPost: number;

  constructor(private postsFacade: PostsFacade) { }
}
