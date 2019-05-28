<template>
    <el-tree :data="data" :props="defaultProps"  @node-click="handleNodeClick">
        <span class="custom-tree-node" slot-scope="{ node }">
            <span @click="handleClick(node.label)" >
                <i class="el-icon-folder-opened"></i>{{ node.label }}
            </span>              
        </span>

    </el-tree>
</template>
<script>
 export default {
     name:"Tree",
      data() {
        return {
          data: [{
            label: '一级 1',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }]
            }]
          }, {
            label: '一级 2',
            children: [{
              label: '二级 2-1',
              children: [{
                label: '三级 2-1-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }]
          }, {
            label: '一级 3',
            children: [{
              label: '二级 3-1',
              children: [{
                label: '三级 3-1-1'
              }]
            }, {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
          }],
          defaultProps: {
            children: 'children',
            label: 'label'
          }
        };
      },
    methods: {
        handleNodeClick(data){
            window.console.log(data)
        },
      async handleClick(){
        this.bus.$emit('load', true)//派发load
        var da =await this.$http.get("/api/list");
        var list = da.data.list;
         this.bus.$emit('sharetext', list,false)//触发事件sharetext
      }
    }
  };
</script>
<style>

</style>
