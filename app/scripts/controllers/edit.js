'use strict';

angular.module('rchSeanceApp')
    .controller('EditCtrl', function($scope, $routeParams, $location, Seances) {
        $scope.seance = Seances.get({seanceId:$routeParams.seanceId});
        $scope.save = function() {
            $scope.seance.$update({seanceId:$scope.seance._id})
                .sucess(function(data, status, headers, config) {
                    alert('ok');
                })
                .error(function(data, status, headers, config) {
                    alert('nok');
                });
        }
        
        $scope.go = function (path) {
            $location.path(path);
        };
});
