import ENV from '../config/environment'
import ApplicationAdapter from './application'

const config = ENV.APP['statusApp']

const namespaceV1 = config.statusAppV1

export default ApplicationAdapter.extend({
  // == Attributes ============================================================
  namespace: namespaceV1
})

