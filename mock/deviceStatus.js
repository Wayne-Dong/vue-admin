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

const data = Mock.mock(
  [
    { project: '(卫星)网络状态',
      status: '未入网'
    },
    { project: '(卫星)入网频点',
      status: '未知'
    },
    { project: '(卫星)业务状态',
      status: '未知'
    },
    { project: '(卫星)波束号',
      status: '未知'
    },
    { project: '(卫星) 信号质量',
      status: '未知'
    },
    { project: '(卫星) 运营商',
      status: '未知'
    },
    { project: '(卫星) SIM卡',
      status: '未入网'
    },
    { project: '(卫星) 本机号码',
      status: '未知'
    },
    { project: '(地面) 网络状态',
      status: '未知'
    },
    { project: '(地面) 信号强度',
      status: '未知'
    },
    { project: '(地面) 运营商',
      status: '未知'
    },
    { project: '(地面) SIM卡',
      status: '未知'
    },
    { project: '(地面) 本机号码',
      status: '未入网'
    },
    { project: '定位信息',
      status: '未知'
    },
    { project: '联网状态',
      status: '未知'
    },
    { project: 'IP地址',
      status: '未知'
    },
    { project: '自检结果',
      status: '未知'
    },
    { project: '热点SSID',
      status: '未知'
    },
    { project: '热点密码',
      status: '未知'
    },
    { project: '系统时间',
      status: '未知'
    },
    { project: '电池电量',
      status: '未知'
    }
  ])
module.exports = [
  {
    url: '/vue-admin/deviceStatus',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: data
      }
    }
  }
]
