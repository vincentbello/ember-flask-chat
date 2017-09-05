QUnit.module('ESLint | app');

QUnit.test('adapters/application.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
});

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'app.js should pass ESLint\n\n');
});

QUnit.test('components/chat-message.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'components/chat-message.js should pass ESLint\n\n');
});

QUnit.test('components/enter-message-form.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'components/enter-message-form.js should pass ESLint\n\n');
});

QUnit.test('helpers/to-object.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'helpers/to-object.js should pass ESLint\n\n');
});

QUnit.test('models/author.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/author.js should pass ESLint\n\n');
});

QUnit.test('models/chatroom.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/chatroom.js should pass ESLint\n\n');
});

QUnit.test('models/message.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/message.js should pass ESLint\n\n');
});

QUnit.test('resolver.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'resolver.js should pass ESLint\n\n');
});

QUnit.test('router.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'router.js should pass ESLint\n\n9:12 - Expected to return a value in function. (array-callback-return)\n9:20 - Missing space before function parentheses. (space-before-function-paren)');
});

QUnit.test('routes/chatroom.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/chatroom.js should pass ESLint\n\n');
});

QUnit.test('routes/index.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/index.js should pass ESLint\n\n');
});

