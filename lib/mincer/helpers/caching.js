'use strict';


// 3rd-party
var _ = require('underscore');


// internal
var getter = require('../common').getter;


////////////////////////////////////////////////////////////////////////////////


getter(module.exports, 'cacheEnabled', function () {
  return !!this.__cacheRoot__;
});



// cacheGet(gatter, options, calback) -> Void
//
// ##### Options:
//
// - id (String)
// - pathname (String)
// - dependencies (String)
//
module.exports.cacheGet = function (getter, options, callback) {
  getter(callback);
};
