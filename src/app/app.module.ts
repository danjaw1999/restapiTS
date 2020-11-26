import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { MainPageComponent } from './main-page/main-page.component';
import { environment } from 'src/environments/environment';
import { postsReducer } from './posts/store/post.reducer';
import { todosReducer } from './todos/store/todos.reducer';
import { commentsReducer } from './comments/store/comments.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffect } from './posts/store/posts.effects';
import { TodosEffects } from './todos/store/todos.effects';
import { CommentsEffects } from './comments/store/comments.effects';
import { todoReducer } from './todos/store/todo.reducer';
import { TodoEffects } from './todos/store/todo.effects';
// import { TodosModule } from './todos/todos.module';
// import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,  
    Error404Component,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    StoreModule.forRoot({posts: postsReducer, todos: todosReducer, comments: commentsReducer, todo: todoReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([PostsEffect, TodosEffects, CommentsEffects, TodoEffects])
    // TodosModule,
    // PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }