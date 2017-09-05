import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  // eslint-disable-line
  this.route('index', { path: '/' }, function () {});
  this.route('chatroom', { path: '/chatroom' });
});

export default Router;
