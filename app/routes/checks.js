import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'

export default Route.extend({
  ajax: service('ajax'),

  setupController(controller) {
    this._super(...arguments);
    this.get('store').createRecord('check', {
      name: 'johny',
      age: '30'
    });
    this.get('ajax').request('api/checks?api-key=ro-pz3x1zy4ae63yhygraqe', {
      type: 'GET',
      contentType: 'application/json'
    }).then((response) => {
      controller.set('model', response)
    }).catch((response) => {
      //error msg
    })
    controller.set('test', 'Checks');
  }
});
