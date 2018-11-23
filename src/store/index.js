import Vue from 'vue'
import Vuex from 'vuex'

import devices from './modules/devices'
import workOrder from './modules/workOrder'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    devices,
    workOrder,
    user,
  },
  strict: debug,
})