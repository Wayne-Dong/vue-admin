<template>
  <div class="switchContainer">
    <span>二线电话</span>
    <el-divider />
    <el-main v-loading="loading">
      <img v-if="phone" src="@/assets/switch_images/phoneEnabled.png" alt="二线电话">
      <img v-if="!phone" src="@/assets/switch_images/phoneDisabled.png" alt="二线电话">
      <div>
        <el-switch v-model="phone" active-color="#13ce66" inactive-color="#ff4949" @change="switchChange" />
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'PhoneSwitch',
  data() {
    return {
      phone: true,
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
