import { Component, Input } from '@angular/core';
import { Post } from 'src/app/posts/shared/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
  @Input() post: Post;
}
