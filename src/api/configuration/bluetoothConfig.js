import request from '@/utils/request'

export function getBluetoothStatus() {
  return request({
    url: '/vue-admin/bluetoothStatus',
    methos: 'get'
  })
}
