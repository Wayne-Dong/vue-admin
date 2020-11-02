const Mock = require('mockjs')

const SOSStatus = Mock.mock({
  item: {
    firstNo: '15532023636',
    secondNo: '14523587541',
    thirdNo: '17796532564'
  }
})

module.exports = [
  {
    url: '/vue-admin/SOSStatus',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: SOSStatus
      }
    }
  }
]
