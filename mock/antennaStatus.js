const Mock = require('mockjs')

// const data = Mock.mock({
//   'items|30': [{
//     id: '@id',
//     title: '@sentence(10, 20)',
//     'status|1': ['published', 'draft', 'deleted'],
//     author: 'name',
//     display_time: '@datetime',
//     pageviews: '@integer(300, 5000)'
//   }]
// })

const data = Mock.mock({
  items: [
    { project: '工作状态',
      status: '自动'
    },
    { project: '天线类型',
      status: '内置天线'
    },
    { project: '天线版本',
      status: 'V1.0'
    }
  ]
})
module.exports = [
  {
    url: '/vue-admin/antennaStatus',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
