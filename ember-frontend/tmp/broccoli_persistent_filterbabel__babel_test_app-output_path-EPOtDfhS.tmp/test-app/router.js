define('test-app/router', ['exports', 'test-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    // eslint-disable-line
    this.route('index', { path: '/' }, function () {});
    this.route('chatroom', { path: '/chatroom' });
  });

  exports.default = Router;
});