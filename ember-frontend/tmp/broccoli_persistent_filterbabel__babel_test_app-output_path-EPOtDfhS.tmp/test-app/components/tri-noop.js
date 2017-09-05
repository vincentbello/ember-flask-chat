define('test-app/components/tri-noop', ['exports', 'ember-tri-state/components/tri-noop'], function (exports, _triNoop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _triNoop.default;
    }
  });
});