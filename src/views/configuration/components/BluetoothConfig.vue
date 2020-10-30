<template>
  <div class="app-container">
    <h2>蓝牙配置</h2>
    <p class="description">搜索和连接蓝牙设备</p>
    <div>
      <h4>配置</h4>
      <table class="myTable">
        <tr>
          <th>蓝牙配置项</th>
          <th>内容</th>
          <th>操作</th>
        </tr>
        <tr>
          <td>运行状态</td>
          <td>{{ bluetoothData.status }}</td>
          <td><el-button size="small">开启</el-button></td>
        </tr>
        <tr>
          <td>名称（SSID）</td>
          <td>{{ bluetoothData.ssid }}</td>
          <td />
        </tr>
        <tr>
          <td>MAC地址</td>
          <td>{{ bluetoothData.mac }}</td>
          <td />
        </tr>
        <tr>
          <td>连接状态</td>
          <td>{{ bluetoothData.connectionStatus }}</td>
          <td />
        </tr>
        <tr>
          <td>开放检测</td>
          <td>{{ bluetoothData.detectable }}</td>
          <td />
        </tr>
        <tr>
          <td>检测超时</td>
          <td>{{ bluetoothData.timeout }}</td>
          <td />
        </tr>
        <tr>
          <td>搜索状态</td>
          <td>{{ bluetoothData.searchStatus }}</td>
          <td />
        </tr>
        <tr>
          <td>查询是否配对</td>
          <td>{{ bluetoothData.matched }}</td>
          <td />
        </tr>
        <tr>
          <td>设备绑定状态</td>
          <td>{{ bluetoothData.bindingStatus }}</td>
          <td />
        </tr>
      </table>
    </div>
    <div>
      <h4>已配对的设备</h4>
      <el-table
        v-loading="matchedDeviceLoading"
        class="myTable"
        :data="matchedDevice"
      >
        <el-table-column prop="ssid" label="设备名（SSID）" />
        <el-table-column prop="operation" label="操作" />
      </el-table>
    </div>
    <div>
      <h4>搜索到的设备</h4>
      <el-table
        v-loading="searchedDeviceLoading"
        class="myTable"
        :data="searchedDevice"
      >
        <el-table-column prop="ssid" label="设备名（SSID）" />
        <el-table-column prop="mac" label="MAC地址" />
        <el-table-column prop="operation" label="操作" />
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getBluetoothStatus } from '@/api/configuration/bluetoothConfig'
export default {
  name: 'Configuration',
  data() {
    return {
      bluetoothData: {
        status: '',
        ssid: '',
        mac: '',
        connectionStatus: '',
        detectable: '',
        timeout: '',
        searchStatus: '',
        matched: '',
        bindingStatus: ''
      },
      matchedDevice: [
        {
          ssid: '测试1',
          operation: 'connect'
        },
        {
          ssid: 'test1',
          operation: 'connect'
        }
      ],
      searchedDevice: [
        {
          ssid: 'test2',
          mac: 'ASLDKJFLASJDF',
          operation: 'connect'
        }
      ],
      matchedDeviceLoading: false,
      searchedDeviceLoading: false
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
      getBluetoothStatus().then(
        response => {
          this.bluetoothData = response.data.item
        }
      )
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
