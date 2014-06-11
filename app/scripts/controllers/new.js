'use strict';

angular.module('rchSeanceApp')
    .controller('CreateCtrl', function($scope, $location, $filter, Restangular) {
        $scope.seance = {
            type: 'INDOOR',
            date: $filter("date")(Date.now(), 'yyyy-MM-dd'),
            start: '20:00',
            end: '22:00'
        };
        $scope.save = function() {
            Restangular.all('seances').post($scope.seance).then(function(seance) {
                $location.path('/');
            });
        }
        
        $scope.go = function (path) {
            $location.path(path);
        };
});
