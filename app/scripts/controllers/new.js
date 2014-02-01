'use strict';

angular.module('rchSeanceApp')
    .controller('CreateCtrl', function($scope, $location, $filter, Seances) {
        $scope.seance = {
            date: $filter("date")(Date.now(), 'yyyy-MM-dd'),
            start: '20:00',
            end: '22:00'
        };
        $scope.save = function() {
            Seances.save({}, $scope.seance);
            $location.path('/');
        }
});
