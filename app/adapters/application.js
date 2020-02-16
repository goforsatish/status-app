import DS from 'ember-data';
import ENV from '../config/environment'

const config = ENV.APP['updown']

const namespaceV1 = config.updownV1


export default DS.JSONAPIAdapter.extend({
  // == Attributes ============================================================
  namespace: namespaceV1
});

