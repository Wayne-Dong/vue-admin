<template>
  <div class="app-container">
    <h2>网络分享</h2>
    <p>网络分享配置，包括热点和以太网的修改与配置。</p>
    <div>
      <div style="text-align: right; margin-bottom: 5px"><span>以太网开关： </span><el-button type="danger" size="small">关闭</el-button></div>
      <el-table
        :data="ethernetData"
        border
        style="width: 100%"
      >
        <el-table-column prop="project" label="以太网设置项" />
        <el-table-column prop="status" label="内容" />
      </el-table>
      <div style="text-align: left; margin-top: 10px"><el-button type="primary" @click="dialogEthernetVisible = true">编辑</el-button></div>
      <el-divider />
    </div>
    <div style="text-align: right; margin-bottom: 5px"><span>热点开关： </span><el-button type="danger" size="small">关闭</el-button></div>
    <el-table
      :data="wifiData"
      border
      style="width: 100%"
    >
      <el-table-column prop="project" label="热点设置项" />
      <el-table-column prop="status" label="内容" />
    </el-table>
    <div style="text-align: left; margin-top: 10px"><el-button type="primary" @click="dialogWifiVisible = true">编辑</el-button></div>
    <el-dialog title="编辑以太网设置" :visible.sync="dialogEthernetVisible">
      <el-form :model="formEthernet">
        <el-form-item label="活动名称">
          <el-input v-model="formEthernet.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="formEthernet.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogEthernetVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="编辑热点设置" :visible.sync="dialogWifiVisible">
      <el-form :model="formWifi">
        <el-form-item label="活动名称">
          <el-input v-model="formWifi.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="formWifi.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogWifiVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NetworkShare',
  data() {
    return {
      ethernetData: [
        {
          'project': '运行状态',
          'status': '正在运行'
        },
        {
          'project': 'IP配置模式',
          'status': '静态地址'
        },
        {
          'project': 'IP地址',
          'status': '127.0.0.1'
        }
      ],
      wifiData: [],
      dialogEthernetVisible: false,
      dialogWifiVisible: false,
      formEthernet: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formWifi: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }

    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
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
