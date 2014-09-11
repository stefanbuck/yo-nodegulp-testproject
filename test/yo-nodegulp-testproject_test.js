'use strict';

var yoNodegulpTestproject = require('../');
var assert = require('should');

describe('yoNodegulpTestproject', function () {

  it('should be awesome', function () {
    yoNodegulpTestproject().should.equal('awesome');
  });

});
