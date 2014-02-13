'use strict';

angular.module('rchSeanceApp')
  .factory('Seances', ['$resource', function ($resource) {
        return $resource('/seances/:seanceId', {seanceId:'@id'}, {
            'update': { method:'PUT' }
        });
    }])