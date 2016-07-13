import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Thing} from '../thing';

@Component({
  moduleId: module.id,
  selector: 'app-blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.css'],
  providers: [BlogService],
 // directives: [ng.CommonJS.NgModel]
})
export class BlogComponent implements OnInit {

  things: Thing[];
  error: string;

  new_title: string;
  new_body: string;

  constructor( private _blog: BlogService) {}

  ngOnInit() {

      this.getNews();
  }

  getNews() {
    this._blog.getThings().subscribe(
      things => this.things = things,
      error => this.error = <any> error
    );
  }

  addNews() {

    console.log('Title is ', this.new_title);

    let nt = new Thing('0', this.new_title, 'standard', new Date());

    this._blog.addNews(nt).subscribe(
      thing => {
        console.log(thing);
        this.new_title = '';
        this.getNews();
      } ,
      error => this.error = <any> error
    );

  }

}
