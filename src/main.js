import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/todo'
/* 自己添加的 */
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

require('./mock');

Vue.use(ElementUI);
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
