import Controller from '@ember/controller';
import computed from 'ember-macro-helpers/computed'

export default Controller.extend({
  // == Computed Properties ===================================================
  tableData: computed('model', function (model) {
    let tableInputs
    if (model) {
      tableInputs =  model
    }
    return tableInputs
  }).readOnly(),
});
