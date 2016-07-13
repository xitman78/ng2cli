import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDER } from './app/app.routes';
import { BlogService } from './app/blog.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [ APP_ROUTER_PROVIDER, BlogService]);

