import Vue from 'vue'
import App from './App.vue'



/* 全局样式 */
import 'normalize.css'
import 'weui/dist/style/weui.min.css'
import 'swiper/dist/css/swiper.min.css'
import './style/icon.less'
import './style/app.less'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
