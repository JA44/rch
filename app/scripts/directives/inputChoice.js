'use strict';
angular.module('rchSeanceApp')
  .directive('inputChoice', 
      function() {
        return {
          require: '?ngModel',
          restrict: 'A',
          scope: {
            ngModel: '='
          },
          template: '<div><span id="first">out</span><span id="second">In</span></div>',
          link: function(scope, elem, attrs, ngModel) {
              scope.$watch('ngModel', function(newValue, oldValue){
                    if(newValue === 'out') {
                        document.getElementById('first').style.backgroundColor = 'gray';
                        document.getElementById('second').style.backgroundColor = 'white';
                    }else{
                        document.getElementById('first').style.backgroundColor = 'white';
                        document.getElementById('second').style.backgroundColor = 'gray';
                    }
                    
              });
              angular.element(document.getElementById('first')).on('click', function(){
                  scope.$apply(function(){
                      ngModel.$setViewValue('out');
                  });
              });
              angular.element(document.getElementById('second')).on('click', function(){
                   scope.$apply(function(){
                      ngModel.$setViewValue('in');
                  });
              });
          }
        };
      }
    );
