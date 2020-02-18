import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse (store, primaryModelClass, payload, id, requestType) {
    if (payload instanceof Array) {
      payload.forEach((check) => {
        check.downsince = check.down_since
        check.faviconurl = check.favicon_url
        check.type = 'check',
        check.id = check.token,
        check.attributes = check
      })
    }
    return this._super(store, primaryModelClass, {data: payload}, id, requestType)
  }
});
