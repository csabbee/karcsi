'use strict';

/*global Firebase*/
angular.module('karcsiApp')
  .controller('MainCtrl', function ($scope, $firebase, FBURL) {
    $scope.item = '';
    $scope.underEdit = false;
    $scope.foods = $firebase(new Firebase(FBURL+'/foods'));
    //var ref = new Firebase(FBURL+'/foods');
    
    $scope.finishEdit = function() {
      $scope.underEdit = false;
    };
    
    $scope.editing = function() {
      $scope.underEdit = true;
    };
  });
