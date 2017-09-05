import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  createdAt: DS.attr('string'),
  author: DS.belongsTo('author', { async: false }),
  chatroom: DS.belongsTo('chatroom'),
});
