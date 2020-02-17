import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'
import {DESCRIPTIONS} from 'status-app/constants/details'

export default Route.extend({
  // == Dependencies ==========================================================
  ajax: service('ajax'),

  // == Ember Lifecycle Hooks =================================================
  setupController(controller) {
    this._super(...arguments);

    // fetch checks from server
    this.get('ajax').request('api/checks?api-key=ro-pz3x1zy4ae63yhygraqe', {
      type: 'GET',
      contentType: 'application/json'
    }).then((checks) => {

      if (checks) {
        const token = controller.model.token
        const check = checks.find(item =>
          item.token==token
        )

        controller.setProperties({
          model: check,
          checks: checks,
          uptime: check.uptime
        })

        const description = DESCRIPTIONS[token]

        if (description) {
          controller.set('description', description)
        }
      }
    }).catch((e) => {
      return e
    })
  }
});
