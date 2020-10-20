<template>
  <el-row :gutter="20">
    <h3>网络流量</h3>
    <el-divider />
    <el-col :span="24">
      <div :id="id" class="chart-container" height="40%" width="100%">
        <!-- <chart height="100%" width="100%" /> -->
      </div>
    </el-col>
  </el-row>

</template>

<script>
// 按需引入 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
  name: 'TrafficStatus',
  props: {
    id: {
      type: String,
      default: 'trafficStatus'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      this.chart = echarts.init(document.getElementById('trafficStatus'))
      this.setOptions()
    },
    setOptions() {
      var option = {
        tooltip: {},
        legend: {
          data: ['销量']
        },
        grid: {
          top: 10,
          left: 30,
          right: 10,
          height: '20%'
        },
        xAxis: {
          data: ['1', '2', '3', '4', '5', '6']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'line',
          data: [5, 20, 36, 10, 60, 20]
        }]
      }
      this.chart.setOption(option)
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
