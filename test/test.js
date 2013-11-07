var assert = require('assert');
var isDiacriticalMark = require('../index.js');

var charCodeArr = [94, 96, 126, 168, 180];
var charArr = [ '^', '`', '~', '¨', '´' ];


charCodeArr.forEach(function(val){
  assert(isDiacriticalMark.fromCode(val), val+' passes');
});

[2, 5, 20, 100, 200].forEach(function(val){
  assert(!isDiacriticalMark.fromCode(val), val+' does not pass');
});

assert(!isDiacriticalMark.fromCode(null), 'fromCode returns false on null');
assert(!isDiacriticalMark.fromCode(undefined), 'fromCode returns false on undefined');

charArr.forEach(function(val){
  assert(isDiacriticalMark.fromChar(val), val+' passes');
});

['a', 'r', 'e', 'é', 'ü'].forEach(function(val){
  assert(!isDiacriticalMark.fromChar(val), val+' does not pass');
});

assert(!isDiacriticalMark.fromChar(null), 'fromChar returns false on null');
assert(!isDiacriticalMark.fromChar(undefined), 'fromChar returns false on undefined');


