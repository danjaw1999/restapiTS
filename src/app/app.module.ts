import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { MainPageComponent } from './main-page/main-page.component';
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
    // TodosModule,
    // PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
