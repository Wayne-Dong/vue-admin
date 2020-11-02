module.exports = [
  {
    url: '/vue-admin/restoreConfig',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: ''
      }
    }
  }
]
