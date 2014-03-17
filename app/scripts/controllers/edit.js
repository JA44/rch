'use strict';

angular.module('rchSeanceApp')
    .controller('EditCtrl', function($scope, $routeParams, $location, Seances) {
        $scope.seance = Seances.get({seanceId:$routeParams.seanceId});
        $scope.error = '';
        $scope.save = function() {
            $scope.error = '';
            $scope.seance.$update({seanceId:$scope.seance._id}).then(function(data, status, headers, config) {
                $location.path('/');
            }).catch(function(data, status, headers, config) {
                $scope.error = 'Une erreur est survenue lors de la validation du formulaire.'
            });
        }
        
        $scope.go = function (path) {
            $location.path(path);
        };
});
