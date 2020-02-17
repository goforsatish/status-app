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
    sortTable () {
      var table = $('#checkTable').eq(0)
      var rows = table.find('tr:gt(0)').toArray().sort(this.comparer(this, table.index()))
      this.asc = !this.asc
      if (!this.asc){rows = rows.reverse()}
      for (var i = 0; i < rows.length; i++){table.append(rows[i])}
    },

    sortUpTime (n) {
      var table;
      table = document.getElementById("checkTable");
      var rows, i, x, y, count = 0;
      var switching = true;

      // Order is set as ascending
      var direction = "ascending";

      // Run loop until no switching is needed
      while (switching) {
        switching = false;
        rows = table.rows;

        //Loop to go through all rows
        for (i = 1; i < (rows.length - 1); i++) {
          var Switch = false;

          // Fetch 2 elements that need to be compared
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];

          // Check the direction of order
          if (direction == "ascending") {

            // Check if 2 rows need to be switched
            if (parseFloat(x.innerHTML.toLowerCase()) > parseFloat(y.innerHTML.toLowerCase()))
            {
              // If yes, mark Switch as needed and break loop
              Switch = true;
              break;
            }
          } else if (direction == "descending") {

            // Check direction
            if (parseFloat(x.innerHTML.toLowerCase()) < parseFloat(y.innerHTML.toLowerCase()))
            {
              // If yes, mark Switch as needed and break loop
              Switch = true;
              break;
            }
          }
        }
        if (Switch) {
          // Function to switch rows and mark switch as completed
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;

          // Increase count for each switch
          count++;
        } else {
          // Run while loop again for descending order
          if (count == 0 && direction == "ascending") {
            direction = "descending";
            switching = true;
          }
        }
      }
    }
  }
});
