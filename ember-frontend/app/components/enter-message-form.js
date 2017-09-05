import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['enter-message-form'],

  message: '',

  authors: Ember.A(),

  init() {
    this._super(...arguments);
    this.fetchAuthors().then((authors) => {
      this.set('authors', authors);
    });

    Ember.run.scheduleOnce('afterRender', this, () => {
      document.getElementById('enter-message-input').focus();
    });
  },

  actions: {
    setAuthor({ target }) {
      this.set('authorId', target.value);
    },

    updateMessage({ target }) {
      this.set('message', target.value);
    },

    enterMessage(message, authorId) {
      if (Ember.isEmpty(message)) {
        return;
      }

      this.submitMessage(message, authorId);
      this.set('message', '');
    },
  },
});
