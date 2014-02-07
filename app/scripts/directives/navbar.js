'use strict';

angular.module('karcsiApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'partials/navbar.html',
      restrict: 'E',
      controller: 'NavbarCtrl'
    };
  });
