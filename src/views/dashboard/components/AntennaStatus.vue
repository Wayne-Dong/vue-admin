<template>
  <el-row :gutter="20">
    <h3>天线状态</h3>
    <el-divider />
    <el-col :span="24">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="project" label="项目" />
        <el-table-column prop="status" label="当前状态" />
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'AntennaStatus',
  data() {
    return {
      tableData: [{
        project: '(卫星) 网络状态',
        status: '未入网'
      },
      {
        project: '(卫星)入网频点',
        status: '未知'
      },
      {
        project: '(卫星)业务状态',
        status: '未知'
      },
      {
        project: '(卫星)业务频点',
        status: '未知'
      },
      {
        project: '(卫星)波束号',
        status: '未知'
      }]
    }
  }
}
</script>
