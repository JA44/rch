'use strict';

angular.module('rchSeanceApp')
    .controller('EditCtrl', function($scope, $routeParams, $location, Seances) {
        $scope.seance = Seances.get({seanceId:$routeParams.seanceId});
        $scope.save = function() {
            $scope.seance.$update();
            $location.path('/');
        }
});
