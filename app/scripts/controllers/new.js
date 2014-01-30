'use strict';

angular.module('rchSeanceApp')
    .controller('CreateCtrl', function($scope, $location, Seances) {
        $scope.save = function() {
            Seances.save({}, $scope.seance);
            $location.path('/');
        }
});
