import 'bootstrap/dist/css/bootstrap.min.css';
import './views/index.html';

import angular from 'angular';
import controller from './controllers';

export default angular
  .module('app', [])
  .controller('calculator', controller);
