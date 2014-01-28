'use strict';

angular.module('rchSeanceApp')
  .controller('EditCtrl', function ($scope, $routeParams, Seances) {
    $scope.seance = Seances.getById(+$routeParams.seanceId);
    $scope.save = function(){
    }
  });
