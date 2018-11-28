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
      { name: 'number', value: '', },
      { name: 'date', value: '', },
    ],
    device: [
      { name: 'name', value: '', },
      { name: 'model', value: '', },
      { name: 'address', value: '', },
      { name: 'company', value: '', },
    ],
    connection: [
      { name: 'name', value: '', },
      { name: 'phone', value: '', },
    ],
    descibe: '',
    descibeImage: [],
    feedback: '',
    feedbackImage: [],
    evaluate: '',
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
      fetchList().then(data => {
        commit(SET_WORKORDERS_LIST, {
          list: data.items,
        })
      })
  },
  getWorkOrder({ commit, }, id) {
    fetchWorkOrder(id).then(workOrder => {
      commit(SET_WORKORDER_ITEM, {
        item: workOrder,
      })
    })
  },
}

export default {
  state,
  actions,
  getters,
  mutations,
}