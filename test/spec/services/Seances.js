'use strict';

describe('Service: Seances', function () {

  // load the service's module
  beforeEach(module('rchSeanceApp'));

  // instantiate service
  var Seances;
  beforeEach(inject(function (_Seances_) {
    Seances = _Seances_;
  }));

  it('should do something', function () {
    expect(!!Seances).toBe(true);
  });

});
