'use strict';

angular.module('rchSeanceApp')
  .factory('Seances', function () {
    var seances = [{
            id: 0,
            date: 1,
            nb: 15,
            type: 0,
            distance: 12,
            remarks: "bla bla bla",
            start: '20:00',
            end: '21:45'
    }];
    // Public API here
    return {
        getAll: function (){ 
           return seances;
        },
        getById: function(id){
            return seances.filter(function(seance){
                return seance.id === id;
            })[0];
        },
        save: function(seance, index){
            seances[index] = seance;
        },
        add: function(seance){
            seances.push(seance);
        }
    }
  });
