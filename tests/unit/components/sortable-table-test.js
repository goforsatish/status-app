import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | sortable-table', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let component = this.owner.lookup('component:sortable-table');
    component.toggleArrowIcon()
    assert.ok(component);
  });
});
