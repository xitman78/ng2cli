/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { BlogService } from './blog.service';

describe('Blog Service', () => {
  beforeEachProviders(() => [BlogService]);

  it('should ...',
      inject([BlogService], (service: BlogService) => {
    expect(service).toBeTruthy();
  }));
});
