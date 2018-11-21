import Vue from 'vue'
import Vuex from 'vuex'

import devices from './modules/devices'
import workOrder from './modules/workOrder'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    devices,
    workOrder,
  },
  strict: debug,
})