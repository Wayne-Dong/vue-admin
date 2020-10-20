<template>
  <div class="switchContainer">
    <span>位置服务</span>
    <!-- <el-divider /> -->
    <el-main v-loading="loading">
      <img v-if="location" src="@/assets/switch_images/locationEnabled.png" alt="位置">
      <img v-if="!location" src="@/assets/switch_images/locationDisabled.png" alt="位置">
      <div>
        <el-switch v-model="location" active-color="#13ce66" inactive-color="#ff4949" @change="switchChange" />
      </div>
      <el-divider />
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'LocationSwitch',
  data() {
    return {
      location: true,
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
