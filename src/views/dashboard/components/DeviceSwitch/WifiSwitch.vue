<template>
  <div class="switchContainer">
    <span>WiFi热点</span>
    <el-divider />
    <el-main v-loading="loading">
      <img v-if="wifi" src="@/assets/switch_images/wifiEnabled.png" alt="WiFi热点">
      <img v-if="!wifi" src="@/assets/switch_images/wifiDisabled.png" alt="WiFi热点">
      <div>
        <el-switch v-model="wifi" active-color="#13ce66" inactive-color="#ff4949" @change="switchChange" />
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'WifiSwitch',
  data() {
    return {
      wifi: true,
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
