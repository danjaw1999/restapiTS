import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from '../main.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-header',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  posts: Post[];
  subscription: Subscription;

  constructor(private mainService: MainService) {}
  
  ngOnInit() {
      this.subscription = this.mainService.fetchPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('Posts destroy');
  }

}
