<template>
  <div class="app-container">
    <p>配置</p>
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
