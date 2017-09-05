define('test-app/adapters/application', ['exports', 'ember-data', 'test-app/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var API = _environment.default.API;
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    // host: API.baseURL,
    namespace: API.namespace
  });
});