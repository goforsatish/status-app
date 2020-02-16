import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | checks', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:checks');
    route.setupController({})
    assert.ok(route);
  });
});
