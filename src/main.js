import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'

Vue.config.productionTip = false

// 在全局配置了一个事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
