import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarea18';
  constructor(private http: HttpClient) { }

  postData() {
    const data = { title: 'foo', body: 'bar', userId: 1 };
    this.http.post('https://jsonplaceholder.typicode.com/posts', data).subscribe(response => {
      console.log(response);
    });
  }
}
