import DS from 'ember-data';
import config from 'test-app/config/environment';

const { API } = config;

export default DS.JSONAPIAdapter.extend({
  // host: API.baseURL,
  namespace: API.namespace,
});
