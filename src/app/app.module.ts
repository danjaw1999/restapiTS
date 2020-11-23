import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { counterReducer } from './posts/store/counter.reducer';

import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { MainPageComponent } from './main-page/main-page.component';
import { environment } from 'src/environments/environment';
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
    StoreModule.forRoot({count: counterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production,
    }),
    // TodosModule,
    // PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }