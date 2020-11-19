import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-header',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {  
  posts$: Observable<Post[]>;

  constructor(private mainService: MainService) {}
  
  ngOnInit() {
      this.posts$ = this.mainService.fetchPosts();
  }
}
