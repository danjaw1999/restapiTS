import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap, mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Comment } from './../shared/comment.model';

import { CommentsService } from './../shared/comments.service';
import { getOneComment } from '../selectors/comments.selectors';

@Component({
  selector: 'app-comment-item-info',
  templateUrl: './comment-item-info.component.html',
  styleUrls: ['./comment-item-info.component.scss']
})
export class CommentItemInfoComponent {
  comment$: Observable<Comment>;
  idCom: number;

  constructor(private activatedRoute: ActivatedRoute, private store: Store, private commentsService: CommentsService) {
    this.comment$ = this.activatedRoute.params.pipe(
      map((data: { id: number }) => {
        this.idCom = data.id;
        return +data.id
      }),
      mergeMap((id) => this.store.select(getOneComment(id))),
      mergeMap((d) => {
        let comment: Observable<Comment>;
        if (!d) {
          comment = this.commentsService.fetchComment(this.idCom);
        } else {
          comment = of(d)
        }
        return comment;

      })
    )
  }
}


