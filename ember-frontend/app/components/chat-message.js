import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['chat-message'],

  isEditing: false,

  actions: {
    edit() {
      this.set('isEditing', true);

      Ember.run.scheduleOnce('afterRender', this, () => {
        const editInput = document.getElementById(`edit-message-${this.get('message.id')}`);
        editInput.value = this.get('message.content');
        editInput.focus();
      });
    },

    saveEdit() {
      const editedContent = document.getElementById(`edit-message-${this.get('message.id')}`).value;

      this.updateMessageContent(editedContent).then(() => {
        this.set('isEditing', false);
      });
    },
  },
});
