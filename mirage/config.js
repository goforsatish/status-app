import checks from './fixtures/checks'

export default function() {
  this.namespace = '/api'

  this.get('checks', function (db, request) {
    return checks
  })

}
