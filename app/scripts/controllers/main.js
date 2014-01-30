'use strict';

angular.module('rchSeanceApp')
  .controller('MainCtrl', function ($scope, $location, Seances) {
    $scope.seances = Seances.query();
    $scope.delete = function(index){
        Seances.delete({seanceId:index}, function(){
            $location.path('/');
        });
    }
    $scope.go = function (path) {
        $location.path(path);
    };
  });
