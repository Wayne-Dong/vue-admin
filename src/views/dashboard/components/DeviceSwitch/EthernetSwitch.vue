<template>
  <div class="switchContainer">
    <span>以太网</span>
    <!-- <el-divider /> -->
    <el-main v-loading="loading">
      <img v-if="ethernet" src="@/assets/switch_images/ethernetEnabled.png" alt="以太网">
      <img v-if="!ethernet" src="@/assets/switch_images/ethernetDisabled.png" alt="以太网">
      <div>
        <el-switch v-model="ethernet" active-color="#13ce66" inactive-color="#ff4949" @change="switchChange" />
      </div>
      <el-divider />
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'EthernetSwitch',
  data() {
    return {
      ethernet: true,
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
