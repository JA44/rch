'use strict';

angular.module('rchSeanceApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'restangular'
])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/seance');
        
        $stateProvider
            .state('seance', {
                url: '/seance',
                controller: 'MainCtrl',
                templateUrl: 'views/seance.list.html'
            })
            .state('edit', {
                url: '/edit/:seanceId',
                controller: 'EditCtrl',
                templateUrl: 'views/seance.edit.html',
                resolve: {
                    seance: function(Restangular, $route){
                        return Restangular.one('seances', $route.current.params.seanceId).get();
                    }
                }
            })
            .state('new', {
                url: '/new',
                controller: 'CreateCtrl',
                templateUrl: 'views/seance.edit.html'
            });
            
      /*  $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/edit/:seanceId', {
                controller: 'EditCtrl',
                templateUrl: 'views/edit.html',
                resolve: {
                    seance: function(Restangular, $route){
                        return Restangular.one('seances', $route.current.params.seanceId).get();
                    }
                }
            })
            .when('/new', {
                controller: 'CreateCtrl',
                templateUrl: 'views/edit.html'
            })
            .otherwise({
                redirectTo: '/'
            });*/
    })
    .run(['Restangular', function(RestangularProvider) {
            RestangularProvider.setBaseUrl('http://localhost:8080');
            RestangularProvider.setRestangularFields({
                id: '_id'
            });

            RestangularProvider.setRequestInterceptor(function(elem, operation, what) {

                if (operation === 'put') {
                    elem._id = undefined;
                    return elem;
                }
                return elem;
            });
    }]);
