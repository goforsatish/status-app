import Route from '@ember/routing/route';
import {isNone} from '@ember/utils'
import {DESCRIPTIONS} from 'status-app/constants/details'

export default Route.extend({

  // == Ember Lifecycle Hooks =================================================
  setupController(controller) {
    this._super(...arguments);
    let token

    if (!isNone(controller.model)) {
      token = controller.model.token

      const check = this.store.peekRecord('check', token)
      controller.set('check', check)

      const description = DESCRIPTIONS[token]

      if (description) {
        controller.set('description', description)
      }
    }
  }
});
