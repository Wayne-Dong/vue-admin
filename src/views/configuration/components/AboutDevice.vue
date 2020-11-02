<template>
  <div class="app-container">
    <h2>关于设备</h2>
    <p class="description">设备版本信息</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Configuration',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
