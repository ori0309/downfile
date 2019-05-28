<template>
  <div class="home">
    <el-container>
      <el-header ><Header></Header></el-header>
      <el-container>
        <el-aside  width="200px"><Tree></Tree></el-aside>
        <el-main style="padding-top:0;"> <RightData></RightData></el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
// @ is an alias to /src
import Tree from "@/components/Tree.vue";
import RightData from "@/components/RightData.vue";
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    Tree,
    RightData,
    Header
  },
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  }
};
</script>
<style>
.headers{
  background-color: #ccc;
}
</style>
