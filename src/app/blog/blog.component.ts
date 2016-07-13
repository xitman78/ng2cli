import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  moduleId: module.id,
  selector: 'app-blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.css']
})
export class BlogComponent implements OnInit {

  posts;

  constructor( private _blog: BlogService) {}

  ngOnInit() {

    this.posts = this._blog.getPosts();
  }

}
