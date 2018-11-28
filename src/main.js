import Vue from 'vue'
import App from './App.vue'
import { router } from './router'

/* 全局样式 */
import 'normalize.css'
import 'weui'
import 'weui/dist/style/weui.min.css'
import 'swiper/dist/css/swiper.min.css'
import './style/main.less'

import './mock'

import store from './store'

Vue.config.productionTip = true

// 全局过滤器
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

// globally components
import './components'

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
