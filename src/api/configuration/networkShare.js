import request from '@/utils/request'

export function getEthernetStatus(params) {
  return request({
    url: '/vue-admin/ethernetStatus',
    method: 'get',
    params
  })
}
export function getWifiStatus(params) {
  return request({
    url: '/vue-admin/wifiStatus',
    method: 'get',
    params
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

