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
                    seance: function(Restangular, $stateParams) {
                        return Restangular.one('seances', $stateParams.seanceId).get();
                    }
                }
            })
            .state('new', {
                url: '/new',
                controller: 'CreateCtrl',
                templateUrl: 'views/seance.edit.html'
            });
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
