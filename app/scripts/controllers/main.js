'use strict';

/*global Firebase*/
angular.module('karcsiApp')
  .controller('MainCtrl', function ($scope, $firebase, FBURL) {
    $scope.item = '';
    $scope.foods = $firebase(new Firebase(FBURL+'/foods'));
    var ref = new Firebase(FBURL+'/foods');
    
  });
