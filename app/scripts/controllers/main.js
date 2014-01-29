'use strict';

angular.module('rchSeanceApp')
  .controller('MainCtrl', function ($scope, Seances) {
    $scope.seances = Seances.getAll();
    $scope.delete = function(index){
        alert(index);
    }
  });
