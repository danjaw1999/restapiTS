import { Component } from '@angular/core';
import { KielbaskaService } from './kielbaska.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jajeczko';
  dane: any;
  constructor(private kielbaska: KielbaskaService){ 
     this.kielbaska.fetchPosts().subscribe((data: any[]) => {
        this.dane = data.map( item => item.title);
     });
  }
}
