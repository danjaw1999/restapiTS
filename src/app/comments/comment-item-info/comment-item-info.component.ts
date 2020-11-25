import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-comment-item-info',
  templateUrl: './comment-item-info.component.html',
  styleUrls: ['./comment-item-info.component.scss']
})
export class CommentItemInfoComponent{
    comment$: Observable<Comment>;

    constructor(private activatedRoute: ActivatedRoute) {
      this.comment$ = this.activatedRoute.data.pipe(
        tap(console.log),
        map((data: {comment: Comment}) => data.comment)
      )
    }
}


// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs';
// import { map, mergeMap, tap } from 'rxjs/operators';
// import { Store } from '@ngrx/store';

// import { CommentsService } from './../shared/comments.service';

// @Component({
//   selector: 'app-comment-item-info',
//   templateUrl: './comment-item-info.component.html',
//   styleUrls: ['./comment-item-info.component.scss']
// })
// export class CommentItemInfoComponent{
//     comment$: Observable<Comment[]>;

//     constructor(private activatedRoute: ActivatedRoute, private commentsService: CommentsService) {
//       this.comment$ = this.activatedRoute.data.pipe(
//         map((data: {comment: Comment}) => data.comment),
//         tap((d) => console.log(d)),
//         mergeMap((id) => this.store.select()),
//         mergeMap((comment) => {
//           if(!comment){
//             return this.commentsService.fetchComment(1);
//           }
//           return [comment];
//         })
//       )
//     }
// }
