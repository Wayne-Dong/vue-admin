<template>
  <div class="app-container">
    <h2>网络分享</h2>
    <p class="description">网络分享配置，包括热点和以太网的修改与配置。</p>
    <div>
      <h4>以太网配置</h4>
      <table class="myTable">
        <tr>
          <th>以太网配置项</th>
          <th>内容</th>
          <th>操作</th>
        </tr>
        <tr>
          <td>运行状态</td>
          <td>{{ ethernetData.status }}</td>
          <td>
            <div v-loading="ethernetSwitchLoading" style="text-align: center;"><el-button :type="ethernetSwitchType" size="small" @click="switchEthernet">{{ ethernetSwitchText }}</el-button></div>
          </td>
        </tr>
        <tr>
          <td>配置模式</td>
          <td>{{ getEthernetMode() }}</td>
          <td />
        </tr>
        <tr>
          <td>IP地址</td>
          <td>{{ ethernetData.ip }}</td>
          <td />
        </tr>
        <tr>
          <div style="text-align: start;"><el-button type="primary" @click="editEthernet">编辑</el-button></div>
        </tr>
      </table>
      <el-divider />
    </div>
    <div>
      <h4>热点配置</h4>
      <table class="myTable">
        <tr>
          <th>热点配置项</th>
          <th>内容</th>
          <th>操作</th>
        </tr>
        <tr>
          <td>运行状态</td>
          <td>{{ wifiData.status }}</td>
          <td>
            <div v-loading="wifiSwitchLoading" style="text-align: center;"><el-button :type="wifiSwitchType" size="small" @click="switchWifi">{{ wifiSwitchText }}</el-button></div>
          </td>
        </tr>
        <tr>
          <td>热点模式</td>
          <td>{{ wifiData.mode }}</td>
          <td />
        </tr>
        <tr>
          <td>热点SSID</td>
          <td>{{ wifiData.ssid }}</td>
          <td />
        </tr>
        <tr>
          <td>热点安全设置</td>
          <td>{{ getWifiSafeMode() }}</td>
          <td />
        </tr>
        <tr>
          <td>热点密码</td>
          <td>{{ wifiData.password }}</td>
          <td />
        </tr>
        <tr>
          <div style="text-align: start;"><el-button type="primary" @click="editWifi">编辑</el-button></div>
        </tr>
      </table>
      <el-divider />
    </div>
    <el-dialog title="编辑以太网配置" :visible.sync="dialogEthernetVisible">
      <el-form :model="ethernetForm">
        <el-form-item label="配置模式:" :label-width="formLabelWidth">
          <el-select v-model="ethernetForm.mode" placeholder="请选择模式">
            <el-option label="静态地址" value="static" />
            <el-option label="动态分配" value="dynamic" />
          </el-select>
        </el-form-item>
        <el-form-item label="IP地址:" :label-width="formLabelWidth">
          <el-input v-model="ethernetForm.ip" placeholder="请输入IP地址" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEthernetVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmEthernetEdit">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="编辑热点配置" :visible.sync="dialogWifiVisible">
      <el-form :model="wifiForm">
        <el-form-item label="热点SSID：" :label-width="formLabelWidth">
          <el-input v-model="wifiForm.ssid" autocomplete="off" />
        </el-form-item>
        <el-form-item label="热点安全设置：" :label-width="formLabelWidth">
          <el-select v-model="wifiForm.safeMode" placeholder="请选择安全设置：">
            <el-option label="WPA2-PSK" value="WPA2-PSK" />
            <el-option label="无" value="none" />
          </el-select>
        </el-form-item>
        <el-form-item label="热点密码：" :label-width="formLabelWidth">
          <el-input v-model="wifiForm.password" autocomplete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogWifiVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmWifiEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getEthernetStatus, getWifiStatus } from '@/api/configuration/networkShare'
export default {
  name: 'NetworkShare',
  data() {
    return {
      ethernetData: {
        status: '',
        mode: '',
        ip: ''
      },
      wifiData: {
        status: '',
        mode: '',
        ssid: '',
        safeMode: '',
        password: ''
      },
      ethernetForm: {
        mode: '',
        ip: ''
      },
      wifiForm: {
        ssid: '',
        safeMode: '',
        password: ''
      },
      dialogEthernetVisible: false,
      dialogWifiVisible: false,
      formLabelWidth: '120px',
      ethernetSwitchLoading: false,
      wifiSwitchLoading: false,
      ethernetSwitchType: 'danger',
      ethernetSwitchText: '关闭',
      wifiSwitchText: '关闭',
      wifiSwitchType: 'danger',
      ethernetSwitchAutofocus: false
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getEthernetStatus().then(response => {
        this.ethernetData = response.data.item
      })
      getWifiStatus().then(response => {
        this.wifiData = response.data.item
      })
    },
    getWifiSafeMode() {
      if (this.wifiData.safeMode === 'none') return '无'
      if (this.wifiData.safeMode === 'WPA2-PSK') return 'WPA2-PSK'
    },
    getEthernetMode() {
      if (this.ethernetData.mode === 'dynamic') return '动态分配'
      if (this.ethernetData.mode === 'static') return '静态地址'
    },
    switchEthernet() {
      this.ethernetSwitchLoading = true
      this.ethernetData.status = '正在执行操作...'
      setTimeout(() => {
        this.ethernetSwitchLoading = false
        if (this.ethernetSwitchType === 'danger') {
          this.ethernetSwitchType = 'success'
          this.ethernetSwitchText = '开启'
          this.ethernetData.status = '未运行'
        } else {
          this.ethernetSwitchType = 'danger'
          this.ethernetSwitchText = '关闭'
          this.ethernetData.status = '正在运行'
        }
        this.loading = false
      }, 1.5 * 1000)
    },
    switchWifi() {
      this.wifiSwitchLoading = true
      this.wifiData.status = '正在执行操作...'
      setTimeout(() => {
        this.wifiSwitchLoading = false
        if (this.wifiSwitchType === 'danger') {
          this.wifiSwitchType = 'success'
          this.wifiSwitchText = '开启'
          this.wifiData.status = '未运行'
          this.ethernetSwitchAutofocus = false
        } else {
          this.wifiSwitchType = 'danger'
          this.wifiSwitchText = '关闭'
          this.wifiData.status = '正在运行'
          this.ethernetSwitchAutofocus = false
        }
        this.loading = false
      }, 1.5 * 1000)
    },
    editEthernet() {
      this.ethernetForm.mode = this.ethernetData.mode
      this.ethernetForm.ip = this.ethernetData.ip
      this.dialogEthernetVisible = true
    },
    confirmEthernetEdit() {
      this.ethernetData.mode = this.ethernetForm.mode
      this.ethernetData.ip = this.ethernetForm.ip
      this.dialogEthernetVisible = false
    },
    editWifi() {
      this.wifiForm.ssid = this.wifiData.ssid
      this.wifiForm.safeMode = this.wifiData.safeMode
      this.wifiForm.password = this.wifiData.password
      this.dialogWifiVisible = true
    },
    confirmWifiEdit() {
      this.wifiData.ssid = this.wifiForm.ssid
      this.wifiData.safeMode = this.wifiForm.safeMode
      this.wifiData.password = this.wifiForm.password
      this.dialogWifiVisible = false
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
