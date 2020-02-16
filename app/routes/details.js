import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'
import computed from 'ember-macro-helpers/computed'

export default Route.extend({
  ajax: service('ajax'),
  columns: null,
  data: 'test',

  gridOptions: {

    columnDefs: [
      { headerName: "Product", field: "name" },
      { headerName: 'Units', field: 'units' },
      { headerName: 'Sales', field: 'sales' },
      { headerName: 'Profit', field: 'profit' }
    ],

    rowData: [
      {
        name: 'Chips',
        units: '223',
        sales: '$54,335',
        profit: '$545,454'
      },
      {
        name: 'Towels',
        units: '965',
        sales: '$1,900',
        profit: '$800'
      }]
  },

  upTime: computed('test', function (uptime) {
    return uptime
  }).readOnly(),

/*  columns: computed(function() {
    return [
      { name: 'A', valuePath: 'A', width: 180 },
      { name: 'B', valuePath: 'B', width: 180 },
      { name: 'C', valuePath: 'C', width: 180 },
      { name: 'D', valuePath: 'D', width: 180 },
    ];
  }),*/

/*  rows: computed(function() {
    return [
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
    ];
  }),*/

  setupController(controller) {
    this._super(...arguments);
    this.set('data', 'new')
    const description = {
      "hs1x": "push messages/device pings",
      "m06d": "log-in system",
      "ccvy": "backend and order processing",
      "fgbi": "workflows",
      "c1xk": "Statistics, weather, and error reporting",
      "kud4": "on-boarding tool",
      "huth": "image processing",
      "evzk": "background jobs"
    }

    this.get('ajax').request('api/checks?api-key=ro-pz3x1zy4ae63yhygraqe', {
      type: 'GET',
      contentType: 'application/json'
    }).then((checks) => {
      if (checks) {
        const token = controller.model.token
        const check = checks.find(item =>
          item.token==token
        )
        controller.set('model', check)
        controller.set('uptime', check.uptime)

        if (description[token]) {
          controller.set('description', description[token])
        }

        controller.set('columns', [
          { name: 'col1', valuePath: 'col1', width: 180 },
          { name: 'col2', valuePath: 'col2', width: 180 },
          { name: 'col3', valuePath: 'col3', width: 180 }
        ])
        controller.set('rows', [
          { col1: 'A8', col2: 'B8', col3: 'C1'},
          { col1: 'A2', col2: 'B2', col3: 'C2'},
          { col1: 'A7', col2: 'B7', col3: 'C7'},
          { col1: 'A4', col2: 'B4', col3: 'C4'}
        ])
        controller.set('sorts', [
          {
            valuePath: 'col1',
            isAscending: false,
          },
          {
            valuePath: 'col2',
            isAscending: true,
          },
        ])
      }
    }).catch((error) => {
      //error msg
    })

  }
});
