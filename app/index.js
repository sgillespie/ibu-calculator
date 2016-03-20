import './vendor';
import './views/index.html';

import controller from './controllers';
import storeService from './services/store-service';

export default angular
  .module('app', [])
  .controller('calculator', ['$scope', 'storeService', controller])
  .factory('storeService', storeService)
  .name;
