define('test-app/helpers/to-object', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.toObject = toObject;
  function toObject(_, obj) {
    return Ember.merge({}, obj);
  }

  exports.default = Ember.Helper.helper(toObject);
});