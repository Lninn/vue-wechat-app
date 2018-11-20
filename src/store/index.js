import Vue from 'vue'
import Vuex from 'vuex'

import { fetchList, fetchDevice } from '@/api/devices'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  devices: [],
  device: {},
}

const getters = {
  titleList: state => {
    if (state.device && state.device.images) {
      return state.device.images.titleList
    }

    return []
  },
  mainList: state => {
    if (state.device && state.device.images) {
      return state.device.images.mainList
    }

    return []
  },
  information: state => {
    if (state.device.information) {
      return state.device.information
    }

    return {}
  },
  parameters: state => {
    if (state.device.parameters && state.device.parameters.length) {
      return state.device.parameters
    }

    return []
  },
  getDeviceById: state => (id) => {
    return state.devices.find(device => device.id === id)
  },
}

const mutations = {
  SET_DEVICE_LIST(state, { list }) {
    state.devices = list
  },
  SET_DEVICE(state, { device }) {
    state.device = device
  },
}

const actions = {
  getDevices ({ commit, }) {
    fetchList().then(response => {
      commit('SET_DEVICE_LIST', {
        list: response.data.items,
      })
    })
  },
  getDevice({ commit, }, id) {
    fetchDevice(id).then(response => {
      commit('SET_DEVICE', {
        device: response.data
      })
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug,
})