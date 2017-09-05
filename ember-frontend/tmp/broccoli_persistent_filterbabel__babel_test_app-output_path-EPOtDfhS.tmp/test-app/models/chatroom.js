define('test-app/models/chatroom', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('name'),
    messages: _emberData.default.hasMany('message'),
    authors: _emberData.default.hasMany('authors')
  });
});