import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ComOfPost } from '../shared/comments-of-post.model';

@Component({
  selector: 'app-post-item-info-comments',
  templateUrl: './post-item-info-comments.component.html',
  styleUrls: ['./post-item-info-comments.component.scss']
})
export class PostItemInfoCommentsComponent {
  com$: Observable<ComOfPost>;
  constructor(private activatedRoute: ActivatedRoute) {
    this.com$ = this.activatedRoute.data.pipe(
      map((data: {com: ComOfPost}) => data.com)
    )
   }
}
