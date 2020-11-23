import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsComponent } from './posts.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostItemInfoComponent } from './post-item-info/post-item-info.component';
import { PostItemInfoCommentsComponent } from './post-item-info-comments/post-item-info-comments.component';

@NgModule({
    imports: [
        CommonModule,
        PostsRoutingModule
    ],
    declarations: [ 
        PostsComponent,
        PostListComponent,
        PostItemComponent,
        PostItemInfoComponent,
        PostItemInfoCommentsComponent
     ]
})
export class PostsModule {}