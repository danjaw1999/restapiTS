import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-item-info',
  templateUrl: './post-item-info.component.html',
  styleUrls: ['./post-item-info.component.scss']
})
export class PostItemInfoComponent {
  post$: Observable<Post>;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.post$ = this.activatedRoute.data.pipe(
      map((data: {post: Post}) => data.post)
    )
  }
}
