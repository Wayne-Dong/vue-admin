<template>
  <div class="app-container">
    <p>通信记录</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Record',
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
