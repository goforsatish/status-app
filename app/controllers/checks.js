import Controller from '@ember/controller';
import {isNone} from '@ember/utils'
import computed from 'ember-macro-helpers/computed'

export default Controller.extend({
  // == Computed Properties ===================================================
  tableData: computed('model', function (model) {
    let tableInputs = []
    if (!isNone(model)) {
      model.map(obj => {
        tableInputs.push(obj)
      })
    }
    tableInputs.sort((a, b) => (a.down > b.down) ? 1 : -1)
    return tableInputs
  }).readOnly(),
});
