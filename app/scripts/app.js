'use strict';

angular.module('karcsiApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angularfire.firebase',
  'angularfire.login',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        authRequired: true,
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
