import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('name'),
  messages: DS.hasMany('message'),
  authors: DS.hasMany('authors'),
});
