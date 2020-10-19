import request from '@/utils/request'

export function getDeviceStatus(params) {
  return request({
    url: '/vue-admin/deviceStatus',
    method: 'get',
    params
  })
}
