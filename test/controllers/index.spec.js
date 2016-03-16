import 'angular-mocks';
import chai from 'chai';
import app from '../../app';

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

  it('populates state', function () {
    should.exist($scope.targets);
    $scope.targets.should.deep.equal({
      volume: 6.5,
      gravity: 1.048,
    });
  });
});
