<template>
  <el-row :gutter="20">
    <h3>设备状态</h3>
    <el-divider />
    <el-col :span="24">
      <el-table
        v-loading="listLoading"
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column prop="project" label="项目" />
        <el-table-column prop="status" label="当前状态" />
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import { getDeviceStatus } from '@/api/dashboard/deviceStatus'
export default {
  name: 'DeviceStatus',
  data() {
    return {
      tableData: [],
      listLoading: true
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.tableLoading = true
      getDeviceStatus().then(response => {
        this.tableData = response.data.items
      })
      console.log(this.tableData)
      setTimeout(() => {
        this.listLoading = false
      }, 1.5 * 1000)
    }
  }
}
</script>
