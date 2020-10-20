<template>
  <div class="switchContainer">
    <span>卫星业务</span>
    <!-- <el-divider /> -->
    <el-main v-loading="loading">
      <img v-if="satellite" src="@/assets/switch_images/satelliteEnabled.png" alt="卫星业务">
      <img v-if="!satellite" src="@/assets/switch_images/satelliteDisabled.png" alt="卫星业务">
      <div>
        <el-switch v-model="satellite" active-color="#13ce66" inactive-color="#ff4949" @change="switchChange" />
      </div>
      <el-divider />
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'SatelliteSwitch',
  data() {
    return {
      satellite: true,
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
