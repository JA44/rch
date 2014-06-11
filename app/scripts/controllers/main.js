'use strict';

angular.module('rchSeanceApp')
  .controller('MainCtrl', function ($scope, $location, Restangular) {
    //$scope.seances = Seances.query();

    $scope.list = function(){
        $scope.seances = Restangular.all("seances").getList().$object;
    };

    $scope.delete = function(id){
        Restangular.one('seances', id)
            .remove()
            .then(function(){
                $scope.list();
            });
    }

    $scope.go = function (path) {
        $location.path(path);
    };

    $scope.list();
  });
