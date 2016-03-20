import app from '../../app';
import chai from 'chai';

const should = chai.should();

describe('stateService', function () {
  let state;

  beforeEach(angular.mock.module(app));
  beforeEach(angular.mock.inject(function (storeService) {
    state = storeService;
  }));

  it('should contain state', function () {
    should.exist(state);
    state.should.be.instanceof(Object);
  });

  it('should contain targets', function () {
    should.exist(state.targets);
    state.targets.should.deep.equal({
      gravity: 1.048,
      volume: 6.5,
    });
  });

  it('should contain hops', function () {
    should.exist(state.hops);
    state.hops.should.deep.equal([
      {
        id: 0,
        type: 'Cascade',
        weight: 1,
        boilTime: 60,
      },
      {
        id: 1,
        type: 'Citra',
        weight: 1.5,
        boilTime: 10,
      },
    ]);
  });
});
