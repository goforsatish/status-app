import Route from '@ember/routing/route';

export default Route.extend({

  // == Ember Lifecycle Hooks =================================================
  setupController(controller) {

    this.get('store').query('check', {'api-key': 'ro-pz3x1zy4ae63yhygraqe'}).then((checks) => {
      controller.set('model', checks)
    }).catch((error) => {
      return error
    })
  }
});
