import Component from '@ember/component'
import layout from 'status-app/templates/components/sortable-table'
import $ from 'jquery'

export default Component.extend({
  layout,
  arrowIconClass: 'arrow-up',
  asc: false,
  arrowIconModifier: 'arrow-down',

  comparer(self, index) {
    return function(a, b) {
      var valA = self.getCellValue(a, index), valB = self.getCellValue(b, index)
      return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
    }
  },

  getCellValue(row, index){
    return $(row).children('td').eq(index).text()
  },

  toggleArrowIcon () {
    if (this.asc) {
      this.set('asc', false)
      this.set('arrowIconModifier', 'arrow-down')
    } else {
      this.set('asc', true)
      this.set('arrowIconModifier', 'arrow-up')
    }
  },

  actions: {
    sortTable (n) {
     this.toggleArrowIcon()
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

          var val = x.innerHTML.toLowerCase().includes('href')
          var value_x
          var value_y
          // Check the direction of order
          if (direction == "ascending") {
            if (val) {
              value_x = x.innerHTML.toLowerCase().split('>')[1].split('<')[0]
              value_y = y.innerHTML.toLowerCase().split('>')[1].split('<')[0]

              // Check if 2 rows need to be switched
              if (value_x > value_y)
              {
                // If yes, mark Switch as needed and break loop
                Switch = true;
                break;
              }
            } else {
              // Check if 2 rows need to be switched
              if (parseFloat(x.innerHTML.toLowerCase()) > parseFloat(y.innerHTML.toLowerCase()))
              {
                // If yes, mark Switch as needed and break loop
                Switch = true;
                break;
              }
            }
          } else if (direction == "descending") {
            if (val) {
              value_x = x.innerHTML.toLowerCase().split('>')[1].split('<')[0]
              value_y = y.innerHTML.toLowerCase().split('>')[1].split('<')[0]

              // Check if 2 rows need to be switched
              if (value_x < value_y)
              {
                // If yes, mark Switch as needed and break loop
                Switch = true;
                break;
              }
            } else {
              // Check direction
              if (parseFloat(x.innerHTML.toLowerCase()) < parseFloat(y.innerHTML.toLowerCase()))
              {
                // If yes, mark Switch as needed and break loop
                Switch = true;
                break;
              }
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
