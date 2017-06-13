var angular = require('angular');
var app = angular.module('app',[]);

import './source/style.css';
import './source/style2.css';
import template from './source/main.hbs';

import _ from 'lodash';

console.log('template', template({name: 'Webpack'}));

console.log(_.isEqual(1,2));

var obj = {
  field1: 111,
  someFn () {
    console.log('someFn');
  }
}
obj.someFn();
