import './vendor';
import './views/index.html';

import controller from './controllers';

export default angular
  .module('app', [])
  .controller('calculator', ['$scope', controller])
  .name;
