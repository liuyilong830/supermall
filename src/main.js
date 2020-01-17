import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/store'
// 1.导入 Toast 组件
import toast from 'components/common/toast/index'
// 2.安装
Vue.use(toast);
// 

Vue.config.productionTip = false

// 在全局配置了一个事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
