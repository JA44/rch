'use strict';

angular.module('rchSeanceApp')
    .controller('EditCtrl', function($scope, $routeParams, $location, Seances) {
        $scope.seance = Seances.getAll()[$routeParams.seanceIndex];
        $scope.save = function() {
            Seances.save($scope.seance, $routeParams.seanceIndex);
            $location.path('/');
        }
});
