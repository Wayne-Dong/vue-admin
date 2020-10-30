<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .el-divider {
    margin: 10px 0px 10px 0px;
  }

  .myTable
  {
    font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
    width:100%;
    border-collapse:collapse;
    table-layout: fixed;
  }
  .myTable td
  {
    font-size: 15px;
    border:1px solid #EBEEF5;
    padding:15px 7px 15px 7px;
    width: 100px;
    color:#000000;
  }
  .myTable th
  {
    font-size: 14px;
    border:1px solid #EBEEF5;
    text-align:left;
    padding:10px 7px 10px 7px;
    color:#606266;
  }
  .description
  {
    font-size: 14px;
    color:#606266;
  }
</style>
