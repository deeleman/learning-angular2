import FormattedTimePipe from './formatted-time.pipe';
import {
  describe,
  expect,
  it,
  xit,
  inject,
  beforeEach,
  beforeEachProviders} from '@angular/core/testing';

describe('shared:FormattedTimePipe', () => {
  let formattedTimePipe: FormattedTimePipe;

  beforeEach(() => formattedTimePipe = new FormattedTimePipe());

  // Specs with assertions
  it('should expose a transform() method', () => {
    expect(typeof formattedTimePipe.transform).toEqual('function');
  });

  it('should transform 50 into "0h:50m"', () => {
    expect(formattedTimePipe.transform(50)).toEqual('0h:50m');
  });

  it('should transform 75 into "1h:15m"', () => {
    expect(formattedTimePipe.transform(75)).toEqual('1h:15m');
  });

  it('should transform 100 "1h:40m"', () => {
    expect(formattedTimePipe.transform(100)).toEqual('1h:40m');
  });

});
