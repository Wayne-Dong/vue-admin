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
  .myTable td, .myTable th
  {
    font-size: 15px;
    border:1px solid #EBEEF5;
    padding:15px 7px 15px 7px;
    width: 100px;
  }
  .myTable th
  {
    font-size: 14px;
    text-align:left;
    padding-top:10px;
    padding-bottom:10px;
    /* background-color:#409EFF; */
    color:#606266;
  }
  .myTable tr.alt td
  {
    color:#000000;
    background-color:#EAF2D3;
  }
</style>
