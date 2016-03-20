import app from '../../app';
import 'angular-mocks';
import chai from 'chai';


const should = chai.should();

describe('Controller', function () {
  let $scope;

  beforeEach(angular.mock.module(app));
  beforeEach(angular.mock.inject(function (_$controller_) {
    $scope = {};

    _$controller_('calculator', {
      $scope,
    });
  }));

  describe('appState', function () {
    it('populates appState', function () {
      should.exist($scope.appState);
    });

    it('populates targets', function () {
      should.exist($scope.appState.targets);
      $scope.appState.targets.should.deep.equal({
        volume: 6.5,
        gravity: 1.048,
      });
    });

    it('populates hops', function () {
      should.exist($scope.appState.hops);

      $scope.appState.hops.should.deep.equal([
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
});
