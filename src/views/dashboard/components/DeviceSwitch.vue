<template>
  <el-row :gutter="10">
    <h3>设备开关</h3>
    <el-divider />
    <el-col :span="3">
      <div class="switchContainer">
        <span>数据业务</span>
        <el-divider />
        <img v-if="dataBusiness" src="@/assets/switch_images/dataBusinessEnabled.png" alt="数据业务">
        <img v-if="!dataBusiness" src="@/assets/switch_images/dataBusinessDisabled.png" alt="数据业务">
        <!-- <img v-if="dataBusiness===0" src="@/assets/switch_images/dataBusinessDisabled.png" alt="加载中"> -->
        <div>
          <el-switch id="dataBusiness" v-model="dataBusiness" active-color="#13ce66" inactive-color="#ff4949" @change="switchChange($event, 'dataBusiness')" />
        </div>
      </div>
    </el-col>
    <el-col :span="3">
      <div class="switchContainer">
        <span>二线电话</span>
        <el-divider />
        <img v-if="phone" src="@/assets/switch_images/phoneEnabled.png" alt="二线电话">
        <img v-if="!phone" src="@/assets/switch_images/phoneDisabled.png" alt="二线电话">
        <div>
          <el-switch v-model="phone" active-color="#13ce66" inactive-color="#ff4949" @change="switchChange" />
        </div>
      </div>
    </el-col>
    <el-col :span="3">
      <div class="switchContainer">
        <span>位置服务</span>
        <el-divider />
        <img v-if="location" src="@/assets/switch_images/locationEnabled.png" alt="位置">
        <img v-if="!location" src="@/assets/switch_images/locationDisabled.png" alt="位置">
        <div>
          <el-switch v-model="location" active-color="#13ce66" inactive-color="#ff4949" @change="switchChange" />
        </div>
      </div>
    </el-col>
    <el-col :span="3">
      <div class="switchContainer">
        <span>以太网</span>
        <el-divider />
        <img v-if="ethernet" src="@/assets/switch_images/ethernetEnabled.png" alt="以太网">
        <img v-if="!ethernet" src="@/assets/switch_images/ethernetDisabled.png" alt="以太网">
        <div>
          <el-switch v-model="ethernet" active-color="#13ce66" inactive-color="#ff4949" @change="switchChange" />
        </div>
      </div>
    </el-col>
    <el-col :span="3">
      <div class="switchContainer">
        <span>WiFi热点</span>
        <el-divider />
        <img v-if="wifi" src="@/assets/switch_images/wifiEnabled.png" alt="WiFi热点">
        <img v-if="!wifi" src="@/assets/switch_images/wifiDisabled.png" alt="WiFi热点">
        <div>
          <el-switch v-model="wifi" active-color="#13ce66" inactive-color="#ff4949" @change="switchChange" />
        </div>
      </div>
    </el-col>
    <el-col :span="3">
      <div class="switchContainer">
        <span>蓝牙手咪</span>
        <el-divider />
        <img v-if="bluetooth" src="@/assets/switch_images/bluetoothEnabled.png" alt="蓝牙手咪">
        <img v-if="!bluetooth" src="@/assets/switch_images/bluetoothDisabled.png" alt="蓝牙手咪">
        <div>
          <el-switch v-model="bluetooth" active-color="#13ce66" inactive-color="#ff4949" @change="switchChange" />
        </div>
      </div>
    </el-col>
    <el-col :span="3">
      <div class="switchContainer">
        <span>卫星业务</span>
        <el-divider />
        <img v-if="satellite" src="@/assets/switch_images/satelliteEnabled.png" alt="卫星业务">
        <img v-if="!satellite" src="@/assets/switch_images/satelliteDisabled.png" alt="卫星业务">
        <div>
          <el-switch v-model="satellite" active-color="#13ce66" inactive-color="#ff4949" @change="switchChange" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'DeviceSwitch',
  data() {
    return {
      dataBusiness: true,
      phone: true,
      location: true,
      ethernet: true,
      wifi: true,
      bluetooth: true,
      satellite: true
    }
  },
  methods: {
    switchChange: function(event, target) {
      //   this.dataBusiness = 0
      //   setTimeout(function() {
      //     this.dataBusiness = 2
      //   }, 3000)
      console.log(event)
      console.log(target)
    },
    isDisabled: function(status) {
      switch (status) {
        case 0 : return true
        case 1 : return false
        case 2 : return false
      }
    }
  }
}
</script>

<style scoped>
  .switchContainer{
    text-align: center;
  }
</style>
