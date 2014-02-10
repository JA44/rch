'use strict';
angular.module('rchSeanceApp')
  .directive('inputChoice', 
      function() {
        return {
          require: '?ngModel',
          restrict: 'E',
          scope: {
            ngModel: '='
          },
          template: '<div class="btn-group" data-toggle="buttons"><label class="btn btn-primary"><input type="radio" name="options">INDOOR</label><label class="btn btn-primary"><input type="radio" name="options">OUTDOOR</label></div>',
          link: function(scope, elem, attrs, ngModel) {
              scope.$watch('ngModel', function(newValue, oldValue){
                //init
                if (newValue) {
                    document.querySelector('.btn-group .btn:last-child').classList.add("active");
                    document.querySelector('.btn-group .btn:first-child').classList.remove("active");
                } else {
                    document.querySelector('.btn-group .btn:first-child').classList.add("active");
                    document.querySelector('.btn-group .btn:last-child').classList.remove("active");
                }
              });
              angular.element(document.querySelector('.btn-group .btn:first-child')).on('click', function(){
                  scope.$apply(function(){
                      ngModel.$setViewValue(false);
                  });
              });
              angular.element(document.querySelector('.btn-group .btn:last-child')).on('click', function(){
                  scope.$apply(function(){
                      ngModel.$setViewValue(true);
                  });
              });
          }
        };
      }
    );
