import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/store'
// 导入 vue 中懒加载技术
import VueLazyload from 'vue-lazyload'

// 1.导入 Toast 组件
import toast from 'components/common/toast/index'
// 2.安装
Vue.use(toast);


Vue.use(VueLazyload, {
  loading: require('./assets/images/common/lazyload.png'),//加载中图片，一定要有，不然会一直重复加载占位图
  error: require('assets/images/common/back.svg')  //加载失败图片
});

Vue.config.productionTip = false

// 在全局配置了一个事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
