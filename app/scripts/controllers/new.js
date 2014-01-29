'use strict';

angular.module('rchSeanceApp')
    .controller('CreateCtrl', function($scope, $location, Seances) {
        $scope.save = function() {
            Seances.add($scope.seance);
            $location.path('/');
        }
});
