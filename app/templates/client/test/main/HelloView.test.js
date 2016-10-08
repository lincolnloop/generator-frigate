"use strict";
var assert = require("assert");
import HelloView from '../../js/main/HelloView.jsx';

describe('Test for Hello View', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
