import { fetchWorkOrder, fetchList } from '@/api/workorder'
import { changeObjects } from '@/utils'

import {
  SET_WORKORDERS_LIST,
  SET_WORKORDER_ITEM,
  SET_ITEMSTATE,
} from '../mutation-types'

const state = {
  list: [],
  ItemState: 'ALL',
  item: {
    information: [
      { name: 'number', value: 'XXX-XXXXXXX', },
      { name: 'date', value: '0000-00-00', },
    ],
    device: [
      { name: 'name', value: '身份证自助取证机', },
      { name: 'model', value: 'BY-788928783', },
      { name: 'address', value: '浙江省杭州市滨江区', },
      { name: 'company', value: 'XXX 有限公司', },
    ],
    connection: [
      { name: 'name', value: '毕淑敏', },
      { name: 'phone', value: '14754744414', },
    ],
    descibe: null,
    descibeImage: [],
    feedback: null,
    feedbackImage: [],
    evaluate: null,
  },
}

const getters = {
  information: state => state.item.information,
  device: state => state.item.device,
  connection: state => state.item.connection,
  descibe: state => state.item.descibe,
  descibeImage: state => {
    const item = state.item
    if (item.descibeImage && item.descibeImage.length) {
      return item.descibeImage
    }
  },
  feedback: state => state.item.feedback,
  feedbackImage: state => {
    const item = state.item
    if (item.feedbackImage && item.feedbackImage.length) {
      return item.feedbackImage
    }
  },
  evaluate: state => state.item.evaluate,
  filterState: state => {
      const s = state.ItemState
      if (s === 'WAITING') {
          return ['INITIALIZED', ]
      } else if (s === 'PROCESSING') {
          return ['RECEIVED', 'PROCESSING',]
      } else if (s === 'COMPLETED') {
          return [s, ]
      } else {
          return ['ALL', ]
      }
  },
  filterList: (state, getters) => {
      const filterState = getters.filterState
      let list = state.list.slice()

      if (filterState) {
          list = list.filter(item => filterState.includes(item.state) || filterState.includes('ALL'))
      }

      return list
  },
}

const mutations = {
  [SET_WORKORDERS_LIST] (state, { list, }) {
    state.list = list
  },
  [SET_WORKORDER_ITEM] (state, { item, }) {
    changeObjects(state.item, item)
  },
  [SET_ITEMSTATE] (state, value) {
    state.ItemState = value
  },
}

const actions = {
  getWorkOrders ({ commit, }) {
      fetchList().then(response => {
          commit(SET_WORKORDERS_LIST, {
              list: response.data.items,
          })
      })
  },
  getWorkOrder({ commit, }, id) {
    fetchWorkOrder(id).then(response => {
      commit(SET_WORKORDER_ITEM, {
        item: response.data,
      })
    })
  },
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}