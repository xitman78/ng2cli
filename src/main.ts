import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDER } from './app/app.routes';
import {disableDeprecatedForms, provideForms} from "@angular/forms";

// import { BlogService } from './app/blog.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  APP_ROUTER_PROVIDER, HTTP_PROVIDERS]);
