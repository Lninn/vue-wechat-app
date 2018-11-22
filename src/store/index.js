import Vue from 'vue'
import Vuex from 'vuex'

import devices from './modules/devices'
import workOrder from './modules/workOrder'
import {
  SET_USER_PROFILE,
} from "./mutation-types";

import { fetchProfile } from '@/api/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  user: {},
}

const mutations = {
  [SET_USER_PROFILE] (state, data) {
    state.user = data
  },
}

const actions = {
  getProfile({ commit, }) {
    fetchProfile().then(response => {
        const data = response.data
        commit(SET_USER_PROFILE, data)
    })
  }
}

export default new Vuex.Store({
  modules: {
    devices,
    workOrder,
  },
  state,
  mutations,
  actions,
  strict: debug,
})