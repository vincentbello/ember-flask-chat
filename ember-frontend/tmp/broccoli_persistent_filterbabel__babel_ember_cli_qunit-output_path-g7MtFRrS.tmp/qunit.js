define("qunit", ["exports"], function (exports) {
  /* globals QUnit */

  var _module = QUnit.module;
  exports.module = _module;
  var test = QUnit.test;
  exports.test = test;
  var skip = QUnit.skip;
  exports.skip = skip;
  var only = QUnit.only;
  exports.only = only;
  var todo = QUnit.todo;

  exports.todo = todo;
  exports["default"] = QUnit;
});