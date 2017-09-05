define('test-app/models/message', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    content: _emberData.default.attr('string'),
    createdAt: _emberData.default.attr('string'),
    author: _emberData.default.belongsTo('author', { async: false }),
    chatroom: _emberData.default.belongsTo('chatroom')
  });
});