import 'bootstrap/dist/css/bootstrap.min.css';
import './views/index.html'

import angular from 'angular';
import controller from './controllers';

angular
  .module('app', [])
  .controller('calculator', controller);

