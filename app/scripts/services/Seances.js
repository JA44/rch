'use strict';

angular.module('rchSeanceApp')
  .factory('Seances', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/seances/:seanceId', {seanceId:'@id'}, {
            'update': { method:'PUT' }
        });
    }])