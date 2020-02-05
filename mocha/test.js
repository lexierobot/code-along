let convert = require('../app.js')
let assert = require('assert');

describe('Temperature Conversion', function() {
  describe('cToF', function() {
    it('should convert -40 celsius to -40 farenheit', function() {
      assert.equal(-40, cToF(-40));
    });
    it('should convert 0 celsius to 32 fahrenheit', function() {
      assert.equal(32, cToF(0));
    });
    it('should return undefined if no temperature is input', function(){
      assert.equal(undefined, cToF(''));
    });
  });
  describe('FtoC', function() {
    it('should convert -40 farenheit to -40 celsius', function() {
        assert.equal(-40, fToC(-40));
    });
    it('should convert 32 fahrenheit to 0 celsius', function() {
      assert.equal(0, fToC(32));
    });
    it('should return undefined if no temperature is input', function(){
      assert.equal(undefined, fToC(''));
    });
  });
});
