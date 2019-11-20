import Vue from 'vue'
import Vuex from 'vuex'
import { CHECKTODOLIST } from "@/store/mutation-types";
import { queryTodoListData } from "@/service/todoService";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      list: [] //渲染的数据，返回给view层的
    },
    mutations: {
      /* 第一个参数是：state 第二个参数 state[属性]的值等于什么？ */
      [CHECKTODOLIST](state,data){
        /* 函数体 , 执行赋值操作 */
        state.list = data;
      }
    },
    actions: {
      /* 到此为止 vuex的数据修改已经完成了*/
      /* 数据从哪里来,dispatch => params => :info */
      /* 数据与服务器交互已经完成*/
      /* 页面数据交互 */
      async [CHECKTODOLIST]({ commit },info){
        const { data } = await queryTodoListData(info.url);
        debugger;
        commit(CHECKTODOLIST, data.list);
      }
    },
    modules: {
    }
  })
