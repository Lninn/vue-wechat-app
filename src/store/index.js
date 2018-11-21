import Vue from 'vue'
import Vuex from 'vuex'

import devices from './modules/devices'

import { fetchWorkOrder } from '@/api/workorder'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  workOrder: {},
}

const getters = {
  workOrderInformation: state => {
    if (state.workOrder.information) {
      return state.workOrder.information
    }
  },
  workOrderDevice: state => {
    if (state.workOrder.device) {
      return state.workOrder.device
    }
  },
  workOrderConnect: state => {
    if (state.workOrder.connection) {
      return state.workOrder.connection
    }
  },
  workOrderDescibe: state => {
    if (state.workOrder.descibe) {
      return state.workOrder.descibe
    }
  },
  workOrderImages1: state => {
    if (state.workOrder.images1 && state.workOrder.images1.length) {
      return state.workOrder.images1
    }

    return []
  },
  workOrderImages2: state => {
    if (state.workOrder.images2 && state.workOrder.images2.length) {
      return state.workOrder.images2
    }

    return []
  },
  workOrderFeedback: state => {
    if (state.workOrder.feedback) {
      return state.workOrder.feedback
    }
  },
  workOrderEvaluate: state => {
    if (state.workOrder.evaluate) {
      return state.workOrder.evaluate
    }
  },
}

const mutations = {
  SET_WORKORDER(state, { workOrder }) {
    state.workOrder = workOrder
  },
}

const actions = {
  getWorkOrder({ commit, }, id) {
    fetchWorkOrder(id).then(response => {
      commit('SET_WORKORDER', {
        workOrder: response.data
      })
    })
  }
}

export default new Vuex.Store({
  modules: {
    devices,
  },
  state,
  getters,
  mutations,
  actions,
  strict: debug,
})