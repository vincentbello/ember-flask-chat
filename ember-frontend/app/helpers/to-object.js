import Ember from 'ember';

export function toObject(_, obj) {
  return Ember.merge({}, obj);
}

export default Ember.Helper.helper(toObject);
