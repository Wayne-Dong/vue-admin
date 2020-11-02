<template>
  <div class="app-container">
    <h2>数据业务配置</h2>
    <p class="description">数据业务开关以及QOS与APN的配置和修改</p>
    <div>
      <h4>业务配置</h4>
      <table class="myTable">
        <tr>
          <th>配置项</th>
          <th>内容</th>
          <th>操作</th>
        </tr>
        <tr>
          <td>共享384业务状态</td>
          <td>{{}}</td>
          <td><el-button size="small">开启</el-button></td>
        </tr>
        <tr>
          <td>独享384业务状态</td>
          <td>{{}}</td>
          <td><el-button size="small">开启</el-button></td>
        </tr>
        <tr>
          <td>独享256业务状态</td>
          <td>{{}}</td>
          <td><el-button size="small">开启</el-button></td>
        </tr>
        <tr>
          <td>独享128业务状态</td>
          <td>{{}}</td>
          <td><el-button size="small">开启</el-button></td>
        </tr>
        <tr>
          <td>数据业务状态</td>
          <td>{{}}</td>
          <td><el-button size="small">开启</el-button></td>
        </tr>
        <tr>
          <td>数据业务选择</td>
          <td>{{}}</td>
          <td><el-button size="small">开启</el-button></td>
        </tr>
        <tr>
          <td>直连模式客户端IP</td>
          <td>{{}}</td>
          <td><el-button size="small">开启</el-button></td>
        </tr>
        <tr>
          <td>直连模式开关</td>
          <td>{{}}</td>
          <td><el-button size="small">开启</el-button></td>
        </tr>
        <tr>
          <td>连接类型</td>
          <td>{{}}</td>
          <td><el-button size="small">开启</el-button></td>
        </tr>
        <tr>
          <td>流量开启总时长</td>
          <td>{{}}</td>
          <td><el-button size="small">开启</el-button></td>
        </tr>
        <tr>
          <td>误帧率</td>
          <td>{{}}</td>
          <td><el-button size="small">开启</el-button></td>
        </tr>
        <tr>
          <td>连通性测试</td>
          <td>{{}}</td>
          <td><el-button size="small">开启</el-button></td>
        </tr>
      </table>
    </div>
    <div>
      <h4>QOS配置</h4>
      <table class="myTable">
        <tr>
          <th>配置项</th>
          <th>内容</th>
        </tr>
        <tr>
          <td>最大上行速度</td>
          <td>{{}}</td>
        </tr>
        <tr>
          <td>最大下行速度</td>
          <td>{{}}</td>
        </tr>
        <tr>
          <td>最小上行速度</td>
          <td>{{}}</td>
        </tr>
        <tr>
          <td>最小下行速度</td>
          <td>{{}}</td>
        </tr>
      </table>
    </div>
    <div>
      <h4>选中的APN</h4>
      <table class="myTable">
        <tr>
          <th>属性</th>
          <th>值</th>
        </tr>
        <tr>
          <td>名称</td>
          <td>{{}}</td>
        </tr>
        <tr>
          <td>接入点名（APN）</td>
          <td>{{}}</td>
        </tr>
        <tr>
          <td>用户名</td>
          <td>{{}}</td>
        </tr>
        <tr>
          <td>密码</td>
          <td>{{}}</td>
        </tr>
        <tr>
          <td>MCC</td>
          <td>{{}}</td>
        </tr>
        <tr>
          <td>MNC</td>
          <td>{{}}</td>
        </tr>
        <tr>
          <td>APN类型</td>
          <td>{{}}</td>
        </tr>
      </table>
    </div>
    <div>
      <h4>APN设置</h4>
      <table />
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
