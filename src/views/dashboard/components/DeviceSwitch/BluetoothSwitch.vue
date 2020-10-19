<template>
  <div class="switchContainer">
    <span>蓝牙手咪</span>
    <el-divider />
    <el-main v-loading="loading">
      <img v-if="bluetooth" src="@/assets/switch_images/bluetoothEnabled.png" alt="蓝牙手咪">
      <img v-if="!bluetooth" src="@/assets/switch_images/bluetoothDisabled.png" alt="蓝牙手咪">
      <div>
        <el-switch v-model="bluetooth" active-color="#13ce66" inactive-color="#ff4949" @change="switchChange" />
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'BluetoothSwitch',
  data() {
    return {
      bluetooth: true,
      loading: false
    }
  },
  methods: {
    switchChange() {
      this.loading = true
      console.log(status)
      console.log(name)
      setTimeout(() => {
        this.loading = false
      }, 1.5 * 1000)
    }
  }
}
</script>
