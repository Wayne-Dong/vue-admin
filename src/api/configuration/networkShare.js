import request from '@/utils/request'

export function getEthernetStatus() {
  return request({
    url: '/vue-admin/ethernetStatus',
    method: 'get'
  })
}
export function getWifiStatus() {
  return request({
    url: '/vue-admin/wifiStatus',
    method: 'get'
  })
}
export function saveEthernetEdit(params) {
  return request({
    url: '/vue-admin/ethernetConfig',
    method: 'post',
    params
  })
}
export function saveWifiEdit(params) {
  return request({
    url: '/vue-admin/wifiConfig',
    method: 'post',
    params
  })
}

