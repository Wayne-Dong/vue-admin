<template>
  <div class="app-container">
    <div>
      <h4>SOS配置</h4>
      <p>配置 SOS 紧急联系号码</p>
      <table class="myTable">
        <tr>
          <th>项目</th>
          <th>紧急联系号码</th>
        </tr>
        <tr>
          <td>首选号码</td>
          <td>{{ SOSConfig.firstNo }}</td>
        </tr>
        <tr>
          <td>次选号码</td>
          <td>{{ SOSConfig.secondNo }}</td>
        </tr>
        <tr>
          <td>第三号码</td>
          <td>{{ SOSConfig.thirdNo }}</td>
        </tr>
        <tr>
          <div style="text-align: start;"><el-button type="primary" @click="editSOSConfig">编辑</el-button></div>
        </tr>
      </table>
    </div>
    <el-dialog title="编辑SOS配置" :visible.sync="dialogSOSConfigVisible">
      <el-form :model="SOSConfigForm">
        <el-form-item label="首选号码：" :label-width="formLabelWidth">
          <el-input v-model="SOSConfigForm.firstNo" placeholder="请输入首选号码" />
        </el-form-item>
        <el-form-item label="次选号码：" :label-width="formLabelWidth">
          <el-input v-model="SOSConfigForm.secondNo" placeholder="请输入次选号码" />
        </el-form-item>
        <el-form-item label="第三号码：" :label-width="formLabelWidth">
          <el-input v-model="SOSConfigForm.thirdNo" placeholder="请输入第三号码" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogSOSConfigVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmSOSConfigEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getSOSStatus, saveSOSConfigEdit } from '@/api/configuration/SOSConfig'

export default {
  name: 'Configuration',
  data() {
    return {
      SOSConfig: {
        firstNo: '',
        secondNo: '',
        thirdNo: ''
      },
      SOSConfigForm: {
        firstNo: '',
        secondNo: '',
        thirdNo: ''
      },
      dialogSOSConfigVisible: false,
      formLabelWidth: '120px'
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.SOSConfig = getSOSStatus().then(response => {
        this.SOSConfig = response.data.item
      })
    },
    editSOSConfig() {
      this.SOSConfigForm.firstNo = this.SOSConfig.firstNo
      this.SOSConfigForm.secondNo = this.SOSConfig.secondNo
      this.SOSConfigForm.thirdNo = this.SOSConfig.thirdNo
      this.dialogSOSConfigVisible = true
    },
    confirmSOSConfigEdit() {
      saveSOSConfigEdit(this.SOSConfigForm)
    }
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
