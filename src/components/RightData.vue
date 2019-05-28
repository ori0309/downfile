<template>
  <div>
    <!-- {{data}} -->
    <el-table
      v-loading="loading"
      :data="data"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
      @row-contextmenu="rightHandle"
      @mousedown="popMenu($event)"
    >
      <div>
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="size"
          label="尺寸"
          sortable
        >
        </el-table-column>

      </div>
    </el-table>
    <div
      class="downMsg"
      id="downMes"
      v-show="downIsShow"
    >
      <a href="javascript:;">下载</a>
    </div>

  </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
  name: "RightData",
  data() {
    return {
      data: [],
      loading: ""
    };
  },
  computed:{
     ...mapState(['downIsShow']),
  },
  methods: {
    list_item_click(it) {
      switch (it) {
        case 0:
          alert("第一项被点击");
          break;
        case 1:
          alert("第二项被点击");
          break;
      }
    },
    formatter(row) {
      return row.size;
    },
    rightHandle() {
      this.isPersoncontextMenus = true;
      let menu = document.getElementById("downMes");
      var e = e || window.event;
      //鼠标点的坐标
      var oX = e.clientX;
      var oY = e.clientY;
      //菜单出现后的位置
      //window.isdisplay= true;
      this.$store.commit("blockMsg");

    //   menu.style.display = this.$store.state.downMsgDis;
      menu.style.left = oX + "px";
      menu.style.top = oY + "px";
      //阻止浏览器默认事件
      // return false;
      e.preventDefault();
    },
    handleKeyup(event) {
      if (event.button == 0) {
        
        this.$store.commit("noneMsg");
      } else if (event.button == 1) {
        
        this.$store.commit("noneMsg");
      }
    }
  },
  mounted: function() {
    window.addEventListener("mousedown", this.handleKeyup);
    //let _this = this;因为this的指向发生了变化，不用箭头函数的话就要先把this保存起来
    this.bus.$on("load", text => {
      //通过$on监听事件sharetext
      //   console.log("test",text);
      this.loading = text;
    });
    this.bus.$on("sharetext", (text, lo) => {
      //通过$on监听事件sharetext
      this.data = text;
      this.loading = lo;
    });
  }
};
</script>
<style >
.downMsg{
  position: fixed;
  display: block;
  background-color: #eee;
  padding: 5px 10px;
  border: 1px solid #ddd;
  
}
a{
    text-decoration: none;
  }
</style>
