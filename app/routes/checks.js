import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'

export default Route.extend({
  // == Dependencies ==========================================================
  ajax: service('ajax'),

  // == Ember Lifecycle Hooks =================================================
  setupController(controller) {
    this._super(...arguments);
    this.get('ajax').request('api/checks?api-key=ro-pz3x1zy4ae63yhygraqe', {
      type: 'GET',
      contentType: 'application/json'
    }).then((checks) => {
      controller.set('model', checks)
    }).catch((error) => {
      console.log(error)
    })
  },

  testFunc: function (){
    const a = 1
    }
});
