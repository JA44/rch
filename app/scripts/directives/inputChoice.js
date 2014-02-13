'use strict';
angular.module('rchSeanceApp')
  .directive('inputChoice', 
      function() {
        return {
          require: '?ngModel',
          restrict: 'E',
          scope: {
            ngModel: '=',
            choice1: '@',
            choice2: '@'
          },
          template: '<div class="btn-group" data-toggle="buttons"><label class="btn btn-primary"><input type="radio" name="options">{{choice1}}</label><label class="btn btn-primary"><input type="radio" name="options">{{choice2}}</label></div>',
          link: function(scope, elem, attrs, ngModel) {
              scope.$watch('ngModel', function(newValue, oldValue){
                //init
                if (newValue === scope.choice1) {
                    document.querySelector('.btn-group .btn:first-child').classList.add("active");
                    document.querySelector('.btn-group .btn:last-child').classList.remove("active");
                } else {
                    document.querySelector('.btn-group .btn:last-child').classList.add("active");
                    document.querySelector('.btn-group .btn:first-child').classList.remove("active");
                }
              });
              angular.element(document.querySelector('.btn-group .btn:first-child')).on('click', function(){
                  scope.$apply(function(){
                      ngModel.$setViewValue(scope.choice1);
                  });
              });
              angular.element(document.querySelector('.btn-group .btn:last-child')).on('click', function(){
                  scope.$apply(function(){
                      ngModel.$setViewValue(scope.choice2);
                  });
              });
          }
        };
      }
    );
