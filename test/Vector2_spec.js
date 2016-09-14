import {expect} from 'chai';
import {
  sum,
  times,
} from '../src/Vector2';

describe('Vector2', () => {

  var v0, v1;

  before(() => {
    v0 = {x: 1, y: 1};
    v1 = {x: 2, y: 1};
  });

  it('handles sum', () => {
    expect(sum(v0, v1)).to.deep.equal({x: 3, y: 2});
  });

  it('handles times', () => {
    expect(times(v0, v1)).to.deep.equal({x: 2, y: 1});
  });

});
