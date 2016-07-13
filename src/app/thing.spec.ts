/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Thing} from './thing';

describe('Thing', () => {
  it('should create an instance', () => {
    expect(new Thing('id','title','info', new Date())).toBeTruthy();
  });
});
