define('test-app/components/chat-message', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'li',
    classNames: ['chat-message'],

    isEditing: false,

    actions: {
      edit: function edit() {
        var _this = this;

        this.set('isEditing', true);

        Ember.run.scheduleOnce('afterRender', this, function () {
          var editInput = document.getElementById('edit-message-' + _this.get('message.id'));
          editInput.value = _this.get('message.content');
          editInput.focus();
        });
      },
      saveEdit: function saveEdit() {
        var _this2 = this;

        var editedContent = document.getElementById('edit-message-' + this.get('message.id')).value;

        this.updateMessageContent(editedContent).then(function () {
          _this2.set('isEditing', false);
        });
      }
    }
  });
});