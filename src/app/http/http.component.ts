import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  loadedPosts=[];

  hide = true;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }



  postData(postForm: { name: string; email: string; contact:number })
  {
    //sending http request
    this.http.post('https://http-request-response.firebaseio.com/posts.json', 
    postForm
    )
    .subscribe(responseData =>
    {
      console.log(responseData); 
      console.log(postForm);
    });
  }

}
