import Vue from 'vue'
import App from './App.vue'

/* 全局样式 */
import 'normalize.css'
import 'weui/dist/style/weui.min.css'
import 'swiper/dist/css/swiper.min.css'
import './style/icon.less'
import './style/app.less'

import './mock'

import router from './router'

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
