import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:details');
    const store = {
      peekRecord: () => {
      }
    }
    route.set('store', store)
    route.setupController({})
    assert.ok(route);
  });
});
