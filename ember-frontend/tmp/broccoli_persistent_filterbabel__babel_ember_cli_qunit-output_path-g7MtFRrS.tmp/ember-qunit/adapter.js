define('ember-qunit/adapter', ['exports', 'ember', 'qunit'], function (exports, _ember, _qunit) {

  function unhandledRejectionAssertion(current, error) {
    var message = undefined,
        source = undefined;

    if (typeof error === 'object' && error !== null) {
      message = error.message;
      source = error.stack;
    } else if (typeof error === "string") {
      message = error;
      source = "unknown source";
    } else {
      message = "unhandledRejection occured, but it had no message";
      source = "unknown source";
    }

    current.pushResult({
      result: false,
      actual: false,
      expected: true,
      message: message,
      source: source
    });
  }

  exports['default'] = _ember['default'].Test.Adapter.extend({
    init: function init() {
      this.doneCallbacks = [];
    },

    asyncStart: function asyncStart() {
      this.doneCallbacks.push(_qunit['default'].config.current ? _qunit['default'].config.current.assert.async() : null);
    },

    asyncEnd: function asyncEnd() {
      var done = this.doneCallbacks.pop();
      // This can be null if asyncStart() was called outside of a test
      if (done) {
        done();
      }
    },

    exception: function exception(error) {
      unhandledRejectionAssertion(_qunit['default'].config.current, error);
    }
  });
});