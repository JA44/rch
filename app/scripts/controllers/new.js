'use strict';

angular.module('rchSeanceApp')
    .controller('CreateCtrl', function($scope, $location, $filter, Seances) {
        $scope.seance = {
            type: false,
            date: $filter("date")(Date.now(), 'yyyy-MM-dd'),
            start: '20:00',
            end: '22:00'
        };
        $scope.save = function() {
            Seances.save({}, $scope.seance, function(){
                $location.path('/');
            });
        }
        
        $scope.go = function (path) {
            $location.path(path);
        };
});
