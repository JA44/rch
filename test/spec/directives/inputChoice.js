'use strict';

describe('Directive: inputChoice', function () {

  // load the directive's module
  beforeEach(module('rchSeanceApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<input-choice></input-choice>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the inputChoice directive');
  }));
});
