import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Thing } from './thing';


@Injectable()
export class BlogService {

  api_url: string;

  constructor(private http: Http) {

    console.log('Blog Service');

    this.api_url = 'http://localhost:3000/api/news';

  }

  getThings() {

    console.log("Getting things");

    return this.http.get(this.api_url)
      .map(function(res: Response) {
          console.log('Server response ',res);
          let body = res.json();
          return <Thing[]> body;
      })
      .catch(function(err:Response) {
        console.log("HTTP Error ", err);
        return Observable.throw(err.json().error || 'Server error');
      });
  }

  addNews(thing: Thing) {

    console.log("Creating thing");

    return this.http.post(this.api_url, thing)
      .map(function(res: Response) {
        console.log('Server response ',res);
        let body = res.json();
        return <Thing> body;
      })
      .catch(function(err:Response) {
        console.log("HTTP Error ", err);
        return Observable.throw(err.json().error || 'Server error');
      });
  }

}
