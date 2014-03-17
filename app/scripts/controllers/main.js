'use strict';

angular.module('rchSeanceApp')
  .controller('MainCtrl', function ($scope, $location, Seances) {
    $scope.seances = Seances.query();
    $scope.delete = function(id){
        Seances.delete({seanceId:id}).$promise.then(function(){
            $scope.seances = Seances.query();
        });
    }
    $scope.go = function (path) {
        $location.path(path);
    };
  });
