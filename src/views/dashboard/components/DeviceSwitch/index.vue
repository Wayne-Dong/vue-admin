<template>
  <el-row :gutter="10">
    <h3>设备开关</h3>
    <el-divider />
    <el-col :xs="12" :md="6" :lg="6" :xl="3">
      <data-switch />
    </el-col>
    <el-col :xs="12" :md="6" :lg="6" :xl="3">
      <phone-switch />
    </el-col>
    <el-col :xs="12" :md="6" :lg="6" :xl="3">
      <location-switch />
    </el-col>
    <el-col :xs="12" :md="6" :lg="6" :xl="3">
      <ethernet-switch />
    </el-col>
    <el-col :xs="12" :md="6" :lg="6" :xl="3">
      <wifi-switch />
    </el-col>
    <el-col :xs="12" :md="6" :lg="6" :xl="3">
      <bluetooth-switch />
    </el-col>
    <el-col :xs="12" :md="6" :lg="6" :xl="3">
      <satellite-switch />
    </el-col>
  </el-row>
</template>

<script>
import BluetoothSwitch from './BluetoothSwitch'
import DataSwitch from './DataSwitch'
import EthernetSwitch from './EthernetSwitch'
import LocationSwitch from './LocationSwitch'
import PhoneSwitch from './PhoneSwitch'
import SatelliteSwitch from './SatelliteSwitch'
import WifiSwitch from './WifiSwitch'
export default {
  name: 'DeviceSwitch',
  components: {
    DataSwitch,
    BluetoothSwitch,
    EthernetSwitch,
    LocationSwitch,
    PhoneSwitch,
    SatelliteSwitch,
    WifiSwitch
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .switchContainer{
    text-align: center;
  }
</style>
