import request from '@/utils/request'

export function getSOSStatus() {
  return request({
    url: '/vue-admin/SOSStatus',
    method: 'get'
  })
}
export function saveSOSConfigEdit(params) {
  return request({
    url: '/vue-admin/SOSConfig',
    method: 'post',
    params
  })
}
