import DS from 'ember-data';
import ENV from '../config/environment'

const config = ENV.APP['statusApp']

const namespaceV1 = config.statusAppV1


export default DS.JSONAPIAdapter.extend({
  // == Attributes ============================================================
  namespace: namespaceV1
});

