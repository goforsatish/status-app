import Component from '@ember/component';
import layout from 'status-app/templates/components/sortable-table'
import $ from 'jquery'

export default Component.extend({
  layout,

  comparer(self, index) {
    return function(a, b) {
      var valA = self.getCellValue(a, index), valB = self.getCellValue(b, index)
      return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
    }
  },

  getCellValue(row, index){ return $(row).children('td').eq(index).text() },

  actions: {
    sortTable() {
      var table = $('#checkTable').eq(0)
      var rows = table.find('tr:gt(0)').toArray().sort(this.comparer(this, table.index()))
      this.asc = !this.asc
      if (!this.asc){rows = rows.reverse()}
      for (var i = 0; i < rows.length; i++){table.append(rows[i])}
    }
  }
});
