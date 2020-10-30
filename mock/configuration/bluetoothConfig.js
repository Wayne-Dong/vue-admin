const Mock = require('mockjs')

const bluetoothStatus = Mock.mock({
  item: {
    status: '正在运行',
    ssid: 'test1',
    mac: 'ADK-DJKDF-DFALS-SDD-DFF-AAGB',
    connectionStatus: '未连接',
    detectable: '可被检测',
    timeout: '120',
    searchStatus: '未搜索',
    matched: '无匹配',
    bindingStatus: '未绑定'
  }
})

module.exports = [
  {
    url: '/vue-admin/bluetoothStatus',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: bluetoothStatus
      }
    }
  }
]
