import angular from 'angular';
import controller from './controllers';

angular
  .module('app', [])
  .controller('calculator', controller);

