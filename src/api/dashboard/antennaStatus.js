import request from '@/utils/request'

export function getAntennaStatus(params) {
  return request({
    url: '/vue-admin/antennaStatus',
    method: 'get',
    params
  })
}
