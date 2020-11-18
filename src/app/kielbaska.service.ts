import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class KielbaskaService {
  constructor(private http: HttpClient) {}

  fetchPosts() {
    const buleczka = 'https://jsonplaceholder.typicode.com/todos/';
    console.log('adsadd');
    return this.http.get(buleczka);
  }
}

