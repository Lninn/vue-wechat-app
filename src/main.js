import Vue from 'vue'
import App from './App.vue'

/* 全局样式 */
import 'normalize.css'
import 'weui/dist/style/weui.min.css'
import 'swiper/dist/css/swiper.min.css'
import './style/icon.less'
import './style/app.less'

import './mock'

import 'weui'

import { router } from './router'
import store from './store'

Vue.config.productionTip = true

// 全局过滤器
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
