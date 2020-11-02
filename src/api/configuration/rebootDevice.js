import request from '@/utils/request'
export function rebootDevice() {
  return request({
    url: '/vue-admin/rebootDevice',
    method: 'get'
  })
}
