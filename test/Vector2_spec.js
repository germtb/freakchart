import {expect} from 'chai';
import {
  sum,
  times,
} from '../src/Vector2';

describe('Vector2', () => {

  var v0, v1;

  before(() => {
    v0 = {x: 4, y: 5};
    v1 = {x: 2, y: 3};
  });

  it('handles sum', () => {
    expect(sum(v0, v1)).to.deep.equal({x: 6, y: 8});
  });

  it('handles times', () => {
    expect(times(v0, v1)).to.deep.equal({x: 8, y: 15});
  });

});
