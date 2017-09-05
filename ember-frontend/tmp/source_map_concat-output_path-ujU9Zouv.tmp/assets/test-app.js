"use strict";



define('test-app/adapters/application', ['exports', 'ember-data', 'test-app/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var API = _environment.default.API;
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    // host: API.baseURL,
    namespace: API.namespace
  });
});
define('test-app/app', ['exports', 'test-app/resolver', 'ember-load-initializers', 'test-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
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
define('test-app/components/tri-noop', ['exports', 'ember-tri-state/components/tri-noop'], function (exports, _triNoop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _triNoop.default;
    }
  });
});
define('test-app/components/tri-state', ['exports', 'ember-tri-state/components/tri-state'], function (exports, _triState) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _triState.default;
    }
  });
});
define('test-app/components/tri-yield', ['exports', 'ember-tri-state/components/tri-yield'], function (exports, _triYield) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _triYield.default;
    }
  });
});
define('test-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define("test-app/ember-tri-state/tests/addon.lint-test", [], function () {
  "use strict";
});
define('test-app/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_and.andHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_and.andHelper);
  }

  exports.default = forExport;
});
define('test-app/helpers/app-version', ['exports', 'test-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('test-app/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_equal.equalHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_equal.equalHelper);
  }

  exports.default = forExport;
});
define('test-app/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gt.gtHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gt.gtHelper);
  }

  exports.default = forExport;
});
define('test-app/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gte.gteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gte.gteHelper);
  }

  exports.default = forExport;
});
define('test-app/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_isArray.isArrayHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_isArray.isArrayHelper);
  }

  exports.default = forExport;
});
define('test-app/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('test-app/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lt.ltHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lt.ltHelper);
  }

  exports.default = forExport;
});
define('test-app/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lte.lteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lte.lteHelper);
  }

  exports.default = forExport;
});
define('test-app/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_notEqual.notEqualHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_notEqual.notEqualHelper);
  }

  exports.default = forExport;
});
define('test-app/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_not.notHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_not.notHelper);
  }

  exports.default = forExport;
});
define('test-app/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_or.orHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_or.orHelper);
  }

  exports.default = forExport;
});
define('test-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('test-app/helpers/route-action', ['exports', 'ember-route-action-helper/helpers/route-action'], function (exports, _routeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routeAction.default;
    }
  });
});
define('test-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('test-app/helpers/to-object', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.toObject = toObject;
  function toObject(_, obj) {
    return Ember.merge({}, obj);
  }

  exports.default = Ember.Helper.helper(toObject);
});
define('test-app/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_xor.xorHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_xor.xorHelper);
  }

  exports.default = forExport;
});
define('test-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'test-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('test-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('test-app/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('test-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('test-app/initializers/export-application-global', ['exports', 'test-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('test-app/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('test-app/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('test-app/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('test-app/initializers/truth-helpers', ['exports', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _registerHelper, _and, _or, _equal, _not, _isArray, _notEqual, _gt, _gte, _lt, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (Ember.Helper) {
      return;
    }

    (0, _registerHelper.registerHelper)('and', _and.andHelper);
    (0, _registerHelper.registerHelper)('or', _or.orHelper);
    (0, _registerHelper.registerHelper)('eq', _equal.equalHelper);
    (0, _registerHelper.registerHelper)('not', _not.notHelper);
    (0, _registerHelper.registerHelper)('is-array', _isArray.isArrayHelper);
    (0, _registerHelper.registerHelper)('not-eq', _notEqual.notEqualHelper);
    (0, _registerHelper.registerHelper)('gt', _gt.gtHelper);
    (0, _registerHelper.registerHelper)('gte', _gte.gteHelper);
    (0, _registerHelper.registerHelper)('lt', _lt.ltHelper);
    (0, _registerHelper.registerHelper)('lte', _lte.lteHelper);
  }

  exports.default = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("test-app/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('test-app/models/author', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    imageUrl: _emberData.default.attr('string')
  });
});
define('test-app/models/chatroom', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('name'),
    messages: _emberData.default.hasMany('message'),
    authors: _emberData.default.hasMany('authors')
  });
});
define('test-app/models/message', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    content: _emberData.default.attr('string'),
    createdAt: _emberData.default.attr('string'),
    author: _emberData.default.belongsTo('author', { async: false }),
    chatroom: _emberData.default.belongsTo('chatroom')
  });
});
define('test-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('test-app/router', ['exports', 'test-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    // eslint-disable-line
    this.route('index', { path: '/' }, function () {});
    this.route('chatroom', { path: '/chatroom' });
  });

  exports.default = Router;
});
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
define('test-app/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('test-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("test-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Dk+N76Ej", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "test-app/templates/application.hbs" } });
});
define("test-app/templates/chatroom", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4wEF8q6f", "block": "{\"statements\":[[11,\"main\",[]],[15,\"class\",\"chatroom\"],[13],[0,\"\\n  \"],[11,\"ul\",[]],[15,\"class\",\"chatroom__message-list\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[6,[\"chat-message\"],null,[[\"message\",\"updateMessageContent\"],[[28,[\"message\"]],[33,[\"route-action\"],[\"updateMessageContent\",[28,[\"message\"]]],null]]],{\"statements\":[[0,\"        \"],[11,\"img\",[]],[16,\"src\",[34,[[28,[\"message\",\"author\",\"imageUrl\"]]]]],[16,\"alt\",[34,[[28,[\"message\",\"author\",\"name\"]]]]],[15,\"class\",\"chat-message__image\"],[13],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"chat-message__main\"],[13],[0,\"\\n          \"],[11,\"header\",[]],[15,\"class\",\"chat-message__header\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"chat-message__info\"],[13],[0,\"\\n              \"],[11,\"span\",[]],[15,\"class\",\"chat-message__name\"],[13],[1,[28,[\"message\",\"author\",\"name\"]],false],[14],[0,\"\\n              \"],[11,\"span\",[]],[15,\"class\",\"chat-message__meta\"],[13],[1,[28,[\"message\",\"createdAt\"]],false],[14],[0,\"\\n            \"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"messageApi\",\"isEditing\"]]],null,{\"statements\":[[0,\"              \"],[11,\"button\",[]],[15,\"class\",\"chat-message__button\"],[5,[\"action\"],[[28,[null]],[28,[\"messageApi\",\"cancelEdit\"]]]],[13],[0,\"Cancel\"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"              \"],[11,\"button\",[]],[15,\"class\",\"chat-message__button\"],[5,[\"action\"],[[28,[null]],[28,[\"messageApi\",\"edit\"]]]],[13],[0,\"Edit\"],[14],[0,\"\\n              \"],[11,\"button\",[]],[15,\"class\",\"chat-message__button chat-message__button--danger\"],[5,[\"action\"],[[28,[null]],[33,[\"route-action\"],[\"deleteMessage\",[28,[\"message\"]]],null]]],[13],[0,\"Delete\"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"          \"],[14],[0,\"\\n          \"],[11,\"div\",[]],[15,\"class\",\"chat-message__content\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"messageApi\",\"isEditing\"]]],null,{\"statements\":[[0,\"              \"],[11,\"form\",[]],[13],[0,\"\\n                \"],[11,\"input\",[]],[15,\"type\",\"text\"],[15,\"class\",\"chat-message__edit-input\"],[16,\"id\",[34,[\"edit-message-\",[28,[\"message\",\"id\"]]]]],[13],[14],[0,\"\\n                \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"chat-message__button chat-message__button--save\"],[5,[\"action\"],[[28,[null]],[28,[\"messageApi\",\"saveEdit\"]]]],[13],[0,\"Save\"],[14],[0,\"\\n              \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"              \"],[1,[28,[\"message\",\"content\"]],false],[0,\"\\n\"]],\"locals\":[]}],[0,\"          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n\"]],\"locals\":[\"messageApi\"]},null]],\"locals\":[\"message\"]},{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"chatroom__no-messages\"],[13],[0,\"\\n      No messages to show.\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"  \"],[14],[0,\"\\n\"],[6,[\"enter-message-form\"],null,[[\"fetchAuthors\",\"submitMessage\"],[[33,[\"route-action\"],[\"fetchAuthors\"],null],[33,[\"route-action\"],[\"submitMessage\"],null]]],{\"statements\":[[0,\"    \"],[11,\"select\",[]],[15,\"name\",\"author-select\"],[15,\"id\",\"author-select\"],[16,\"onchange\",[33,[\"action\"],[[28,[null]],[28,[\"formApi\",\"setAuthor\"]]],null],null],[15,\"class\",\"enter-message-form__select\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"formApi\",\"authors\"]]],null,{\"statements\":[[0,\"        \"],[11,\"option\",[]],[16,\"value\",[28,[\"author\",\"id\"]],null],[16,\"selected\",[33,[\"eq\"],[[28,[\"author\",\"id\"]],[28,[\"formApi\",\"authorId\"]]],null],null],[13],[1,[28,[\"author\",\"name\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"author\"]},null],[0,\"    \"],[14],[0,\"\\n    \"],[11,\"input\",[]],[15,\"type\",\"text\"],[15,\"id\",\"enter-message-input\"],[15,\"class\",\"enter-message-form__input\"],[15,\"placeholder\",\"Enter message...\"],[16,\"onchange\",[33,[\"action\"],[[28,[null]],[28,[\"formApi\",\"updateMessage\"]]],null],null],[16,\"value\",[28,[\"formApi\",\"message\"]],null],[13],[14],[0,\"\\n    \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"enter-message-form__button\"],[5,[\"action\"],[[28,[null]],[28,[\"formApi\",\"enterMessage\"]]]],[13],[0,\"Submit\"],[14],[0,\"\\n\"]],\"locals\":[\"formApi\"]},null],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "test-app/templates/chatroom.hbs" } });
});
define("test-app/templates/components/chat-message", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "07MaM8z5", "block": "{\"statements\":[[18,\"default\",[[33,[\"to-object\"],null,[[\"isEditing\",\"edit\",\"cancelEdit\",\"saveEdit\"],[[28,[\"isEditing\"]],[33,[\"action\"],[[28,[null]],\"edit\"],null],[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"isEditing\"]]],null],false],null],[33,[\"action\"],[[28,[null]],\"saveEdit\"],null]]]]]],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "test-app/templates/components/chat-message.hbs" } });
});
define("test-app/templates/components/enter-message-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MrYBf2kI", "block": "{\"statements\":[[18,\"default\",[[33,[\"to-object\"],null,[[\"authors\",\"authorId\",\"message\",\"setAuthor\",\"updateMessage\",\"enterMessage\"],[[28,[\"authors\"]],[28,[\"authorId\"]],[28,[\"message\"]],[33,[\"action\"],[[28,[null]],\"setAuthor\"],null],[33,[\"action\"],[[28,[null]],\"updateMessage\"],null],[33,[\"action\"],[[28,[null]],\"enterMessage\",[28,[\"message\"]],[28,[\"authorId\"]]],null]]]]]],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "test-app/templates/components/enter-message-form.hbs" } });
});
define("test-app/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "25c+uzl/", "block": "{\"statements\":[[6,[\"link-to\"],[\"chatroom\"],null,{\"statements\":[[0,\"Chat Room\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "test-app/templates/index.hbs" } });
});
define("test-app/templates/posts", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "l1wJ/nTB", "block": "{\"statements\":[[11,\"ul\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[11,\"li\",[]],[15,\"class\",\"post__title\"],[13],[0,\"\\n      \"],[1,[28,[\"post\",\"title\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[\"post\"]},null],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "test-app/templates/posts.hbs" } });
});


define('test-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'test-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("test-app/app")["default"].create({"name":"test-app","version":"0.0.0+"});
}
//# sourceMappingURL=test-app.map
