import DS from 'ember-data'

const {Model, attr} = DS

export default Model.extend({
  // == Attributes ============================================================
  alias: attr('string'),
  token: attr('string'),
  url: attr('string'),
  down: attr('boolean'),
  uptime: attr('number'),
  faviconurl: attr('string'),
  downsince: attr('string')
})
