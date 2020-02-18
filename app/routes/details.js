import Route from '@ember/routing/route';
import {isNone} from '@ember/utils'
import {inject as service} from '@ember/service'
import {DESCRIPTIONS} from 'status-app/constants/details'

export default Route.extend({
  // == Dependencies ==========================================================
  ajax: service('ajax'),

  // == Ember Lifecycle Hooks =================================================
  setupController(controller) {
    this._super(...arguments);
    let token

    if (!isNone(controller.model)) {
      token = controller.model.token
      const check = this.store.peekRecord('check', token)

      controller.setProperties({
        alias: check.alias,
        uptime: check.uptime,
        check: check
      })

      const description = DESCRIPTIONS[token]

      if (description) {
        controller.set('description', description)
      }
    }
  }
});
