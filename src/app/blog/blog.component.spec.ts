/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Http } from '@angular/http';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BlogService } from '../blog.service';
import { BlogComponent } from './blog.component';

/*
describe('Component: Blog', () => {
  it('should create an instance', () => {
    let http = new Http();
    let service = new BlogService(http);
    let component = new BlogComponent(service);
    expect(component).toBeTruthy();
  });
});
*/
