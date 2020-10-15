<template>
  <el-row :gutter="20">
    <h3>网络流量</h3>
    <el-divider />
    <el-col :span="24">
      <div class="chart-container">
        <!-- <chart height="100%" width="100%" /> -->
      </div>
    </el-col>
  </el-row>

</template>

<script>
// 按需引入 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
  name: 'TrafficStatus',
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      this.chart = echarts.init(this.$el)
      this.setOptions()
    },
    setOptions() {
      this.chart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
