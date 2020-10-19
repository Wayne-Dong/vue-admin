<template>
  <el-row :gutter="20">
    <el-col :span="10">
      <div class="grid-content">
        <device-status />
      </div>
    </el-col>
    <el-col :span="14">
      <el-row>
        <el-col :span="24">
          <div>
            <device-switch />
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div>
            <antenna-status />
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div>
            <traffic-status />
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
import { mapGetters } from 'vuex'
import DeviceStatus from './components/DeviceStatus'
import DeviceSwitch from './components/DeviceSwitch/index'
import AntennaStatus from './components/AntennaStatus'
import TrafficStatus from './components/TrafficStatus'
export default {
  name: 'Dashboard',
  components: {
    DeviceStatus,
    DeviceSwitch,
    AntennaStatus,
    TrafficStatus
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .el-col {
    border-radius: 10px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    /* border:1px solid rgb(5, 94, 105); */
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
