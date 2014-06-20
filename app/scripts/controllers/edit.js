'use strict';

angular.module('rchSeanceApp')
    .controller('EditCtrl', function($scope, $location, seance) {
        $scope.seance = seance;
        $scope.error = '';
        $scope.save = function() {            
            $scope.error = '';
            $scope.seance.put()
                .then(function() {
                    $location.path('/');
                })
                .catch(function(data, status, headers, config) {
                    $scope.error = 'Une erreur est survenue lors de la validation du formulaire.'
                });
        }
        
        $scope.go = function (path) {
            $location.path(path);
        };
});
