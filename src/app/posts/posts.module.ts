import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsComponent } from './posts.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [ 
        PostsComponent,
        PostListComponent,
        PostItemComponent
     ]
})
export class PostsModule {}