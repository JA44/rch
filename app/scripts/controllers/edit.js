'use strict';

angular.module('rchSeanceApp')
    .controller('EditCtrl', function($scope, $routeParams, $location, Seances) {
        $scope.seance = Seances.get({seanceId:$routeParams.seanceId});
        $scope.save = function() {
            $scope.seance.$update({seanceId:$scope.seance._id});
            $location.path('/');
        }
        
        $scope.go = function (path) {
            $location.path(path);
        };
});
