import request from '@/utils/request'

export function restoreConfig() {
  return request({
    url: 'vue-admin/restoreConfig',
    method: 'get'
  })
}
