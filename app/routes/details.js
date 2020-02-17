import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'

export default Route.extend({
  // == Dependencies ==========================================================
  ajax: service('ajax'),

  // == Ember Lifecycle Hooks =================================================
  setupController(controller) {
    this._super(...arguments);
    this.set('data', 'new')
    const descriptions = {
      "hs1x": "push messages/device pings",
      "m06d": "log-in system",
      "ccvy": "backend and order processing",
      "fgbi": "workflows",
      "c1xk": "Statistics, weather, and error reporting",
      "kud4": "on-boarding tool",
      "huth": "image processing",
      "evzk": "background jobs"
    }

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

        const description = descriptions[token]

        if (description) {
          controller.set('description', description)
        }
      }
    }).catch((error) => {
      return error
    })
  }
});
