import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

  posts;

  constructor() {

    console.log("Blog Service");

    this.posts = ['one', 'two', 'three'];

  }

  getPosts() {
    return this.posts;
  }

}
