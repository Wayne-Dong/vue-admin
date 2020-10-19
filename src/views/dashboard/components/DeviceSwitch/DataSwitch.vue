<template>
  <div class="switchContainer">
    <span>数据业务</span>
    <el-divider />
    <el-main v-loading="loading">
      <img v-if="dataBusiness" src="@/assets/switch_images/dataBusinessEnabled.png" alt="数据业务">
      <img v-if="!dataBusiness" src="@/assets/switch_images/dataBusinessDisabled.png" alt="数据业务">
      <div>
        <el-switch id="dataBusiness" v-model="dataBusiness" active-color="#13ce66" inactive-color="#ff4949" @change="switchChange($event, 'dataBusiness')" />
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'DataSwitch',
  data() {
    return {
      dataBusiness: true,
      loading: false
    }
  },
  methods: {
    switchChange(status, name) {
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
