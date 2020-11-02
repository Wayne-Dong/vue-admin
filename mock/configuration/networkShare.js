const Mock = require('mockjs')

const ethernetStatus = Mock.mock({
  item: { runningStatus: '正在运行',
    mode: 'static',
    ip: '116.32.23.56'
  }
})
const wifiStatus = Mock.mock({
  item: {
    runningStatus: '正在运行',
    ssid: 'test-2',
    mode: '2.4G',
    safeMode: 'WPA2-PSK',
    password: '1234556'
  }
})
module.exports = [
  {
    url: '/vue-admin/ethernetStatus',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: ethernetStatus
      }
    }
  },
  {
    url: '/vue-admin/wifiStatus',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: wifiStatus
      }
    }
  }
]
