define('test-app/routes/chatroom', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    store: Ember.inject.service(),

    model: function model() {
      return this.get('store').findAll('message');
    },
    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);
      setInterval(function () {
        return _this.refresh();
      }, 5000);
    },


    actions: {
      fetchAuthors: function fetchAuthors() {
        return this.get('store').findAll('author');
      },
      deleteMessage: function deleteMessage(message) {
        message.destroyRecord();
      },
      submitMessage: function submitMessage(message) {
        var authorId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        var author = this.get('store').peekRecord('author', authorId);
        var messageRecord = this.get('store').createRecord('message', {
          content: message,
          author: author
        });

        messageRecord.save();
      },
      updateMessageContent: function updateMessageContent(message, editedContent) {
        message.set('content', editedContent);
        return message.save();
      }
    }
  });
});