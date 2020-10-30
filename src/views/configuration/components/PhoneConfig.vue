<template>
  <div class="app-container">
    <h2>手咪配置</h2>
    <p class="description">搜索和连接手咪配件以及查看已连接的手咪配件信息</p>
    <div>
      <!-- <h4>配置</h4> -->
      <table class="myTable">
        <tr>
          <th>配置项</th>
          <th>内容</th>
          <th>操作</th>
        </tr>
        <tr>
          <td />
          <td />
          <td />
        </tr>
      </table>
    </div>
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
