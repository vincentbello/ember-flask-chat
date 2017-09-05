define('test-app/components/enter-message-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'form',
    classNames: ['enter-message-form'],

    message: '',

    authors: Ember.A(),

    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);
      this.fetchAuthors().then(function (authors) {
        _this.set('authors', authors);
      });

      Ember.run.scheduleOnce('afterRender', this, function () {
        document.getElementById('enter-message-input').focus();
      });
    },


    actions: {
      setAuthor: function setAuthor(_ref) {
        var target = _ref.target;

        this.set('authorId', target.value);
      },
      updateMessage: function updateMessage(_ref2) {
        var target = _ref2.target;

        this.set('message', target.value);
      },
      enterMessage: function enterMessage(message, authorId) {
        if (Ember.isEmpty(message)) {
          return;
        }

        this.submitMessage(message, authorId);
        this.set('message', '');
      }
    }
  });
});