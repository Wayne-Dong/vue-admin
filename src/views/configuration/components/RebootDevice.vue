<template>
  <div class="app-container">
    <h2>重启设备</h2>
    <p class="description">点击“重启设备”按钮后，设备将重启，网络连接将中断，请重新登录管理系统，操作可能需要几分钟，请稍候...</p>
    <div style="text-align:center">
      <el-button type="danger" @click="dialogVisible = true">重启设备</el-button>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>确定要重启设备吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmReboot">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { rebootDevice } from '@/api/configuration/rebootDevice'
export default {
  name: 'Configuration',
  data() {
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    confirmReboot() {
      this.dialogVisible = false
      rebootDevice().then(response => {
        if (response.code === 20000) {
          this.$notify({
            title: '成功',
            message: '重启设备请求发送成功',
            type: 'success'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
