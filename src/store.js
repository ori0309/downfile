import Vue from "vue";
import Vuex from "vuex";
// import Axios from "axios";

// 挂载插件
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false // 登录状态
    ,downMsgDis:"none",
    downIsShow:false,
  },
  mutations: {
    blockMsg(state) {
      state.downMsgDis = "block";
      state.downIsShow=true;
    },
    noneMsg(state) {
      state.downMsgDis = "none";
      state.downIsShow=false;
    }
  },
  getters: {
    // 对state中的数据进行加工处理
    
  },
  actions: {
  
  }
});
