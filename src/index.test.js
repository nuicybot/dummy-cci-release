var avengers = require('./index');
var expect = require('chai').expect;
const mm = require('micromatch');

describe('avenger-names', function() {
  it('should work!', function() {
    expect(true).to.be.true;
    // console.log(mm.isMatch(' dont need a release to README 1 (#47)','!no-release:*'));
    // console.log(mm.isMatch('no-release hello how are you', 'no-release*'))
  })
});