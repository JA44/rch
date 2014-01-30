'use strict';

angular.module('rchSeanceApp')
  .controller('MainCtrl', function ($scope, $location, Seances) {
    $scope.seances = Seances.getAll();
    $scope.delete = function(index){
        //TODO
    }
    $scope.go = function (path) {
        console.dir($location.path(path));
    };
  });
