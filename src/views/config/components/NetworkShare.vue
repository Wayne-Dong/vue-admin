<template>
  <div class="app-container">
    <p>网络分享</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NetworkShare',
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
