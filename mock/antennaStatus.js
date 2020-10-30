const Mock = require('mockjs')

const data = Mock.mock(
  [
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
)
module.exports = [
  {
    url: '/vue-admin/antennaStatus',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: data
      }
    }
  }
]
