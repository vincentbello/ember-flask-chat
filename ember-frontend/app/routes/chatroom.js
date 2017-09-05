import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),

  model() {
    return this.get('store').findAll('message');
  },

  init() {
    this._super(...arguments);
    setInterval(() => this.refresh(), 5000);
  },

  actions: {
    fetchAuthors() {
      return this.get('store').findAll('author');
    },

    deleteMessage(message) {
      message.destroyRecord();
    },

    submitMessage(message, authorId = 1) {
      const author = this.get('store').peekRecord('author', authorId);
      const messageRecord = this.get('store').createRecord('message', {
        content: message,
        author,
      });

      messageRecord.save();
    },

    updateMessageContent(message, editedContent) {
      message.set('content', editedContent);
      return message.save();
    },
  },
});
