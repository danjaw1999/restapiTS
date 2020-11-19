import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { PostsComponent } from './posts/posts.component';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { Error404Component } from './error404/error404.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    TodosComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
