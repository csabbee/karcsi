'use strict';

angular.module('karcsiApp')
  .directive('vcsEditform', function () {
    return {
      template: '<input ng-model="toedit">',
      restrict: 'E',
      replace: true,
      scope: {
        'toedit' : '='
      },
      link: function(scope, element, attrs){
        console.dir(scope.toedit);
      }
    };
  });
