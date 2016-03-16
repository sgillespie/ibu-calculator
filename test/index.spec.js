import app from '../app';
import chai from 'chai';

chai.should();

describe('App', function () {
  it('app.name should be \'app\'', function () {
    app.should.equal('app');
  });
});
