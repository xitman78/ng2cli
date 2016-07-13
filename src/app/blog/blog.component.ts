import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Thing} from '../thing';

@Component({
  moduleId: module.id,
  selector: 'app-blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.css'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit {

  posts;
  things: Thing[];
  error: string;

  constructor( private _blog: BlogService) {}

  ngOnInit() {

    this.posts = this._blog.getPosts();

    this._blog.getThings().subscribe(
      things => this.things = things,
      error => this.error = <any> error
    );
  }

}
