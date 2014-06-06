'use strict';

angular.module('rchSeanceApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'restangular'
])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/edit/:seanceId', {
                controller: 'EditCtrl',
                templateUrl: 'views/edit.html'
            })
            .when('/new', {
                controller: 'CreateCtrl',
                templateUrl: 'views/edit.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(['Restangular', function(RestangularProvider) {
            RestangularProvider.setBaseUrl('http://localhost:8080');
    }]);
