/**
 * Created by AlexMC on 7/13/16.
 */

import { provideRouter } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
//import { BlogService } from './blog.service';
import { BlogComponent} from './blog/blog.component';

export const routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent}
];

export const APP_ROUTER_PROVIDER = [
  provideRouter(routes)
];
