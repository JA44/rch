'use strict';

describe('Controller: EditctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('rchSeanceApp'));

  var EditctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditctrlCtrl = $controller('EditctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
