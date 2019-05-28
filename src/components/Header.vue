<template>
  <div class="header">
      <el-row>
        <el-col :span="12">
          <el-breadcrumb
            separator-class="el-icon-arrow-right"
            class="colorTitle"
          >
            <el-breadcrumb-item :to="{ path: '/' }">信息采集平台三七前置机下载器</el-breadcrumb-item>
            <el-breadcrumb-item>文件夹1</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="12">
          <el-dropdown style="float:right;">
            <i
              class="el-icon-more"
              style="margin-right: 15px;display:inline-block;line-height:0;margin-top:25px;"
            ></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  /* background-color: #2196f3; */
  color: #fff;
  height: 50px;
  line-height: 50px;
   background-color: #ccc;
}
.colorTitle {
  line-height: 50px;
}
.el-breadcrumb__item .el-breadcrumb__inner {
  color: #fff;
}
</style>