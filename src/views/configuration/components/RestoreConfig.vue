<template>
  <div class="app-container">
    <h2>恢复默认设置</h2>
    <p class="description">点击“恢复默认设置”按钮后，设备当前所有配置将丢弃，并恢复成默认配置，请使用默认账号重新登录管理系统，操作可能需要几分钟，请稍候...</p>
    <div style="text-align:center">
      <el-button type="danger" @click="dialogVisible = true">恢复默认设置</el-button>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>确定要恢复默认设置吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmRestoreConfig">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { restoreConfig } from '@/api/configuration/restoreConfig'
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
    restoreConfig() {

    },
    confirmRestoreConfig() {
      this.dialogVisible = false
      restoreConfig().then(response => {
        if (response.code === 20000) {
          this.$notify({
            title: '成功',
            message: '恢复默认设置请求发送成功',
            type: 'success'
          })
        } else {
          this.$notify({
            title: '失败',
            message: '恢复默认设置请求失败',
            type: 'error'
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
