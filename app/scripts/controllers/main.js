'use strict';

angular.module('rchSeanceApp')
  .controller('MainCtrl', function ($scope, $location, Restangular, Seances) {
    //$scope.seances = Seances.query();
    var baseSeances = Restangular.all('seances');

    $scope.list = function(){
        baseSeances.getList().then(function(seances){
            $scope.seances = seances;    
        });
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
