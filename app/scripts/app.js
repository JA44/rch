'use strict';

angular.module('rchSeanceApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/edit/:seanceIndex', {
            controller:'EditCtrl',
        templateUrl:'views/edit.html'
      })
      .when('/new', {
            controller:'CreateCtrl',
            templateUrl:'views/edit.html'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
