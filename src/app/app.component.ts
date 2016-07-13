import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
//import { APP_ROUTER_PROVIDER } from './app.routes';
import { HeaderComponent } from './header';
import { BlogService} from './blog.service';
import { BlogComponent } from './blog/blog.component';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ HeaderComponent, BlogComponent, ROUTER_DIRECTIVES ],
  providers: [ BlogService ]
})
export class AppComponent {

}
