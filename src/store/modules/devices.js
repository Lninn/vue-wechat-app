import { SET_DEVICES_LIST, SET_DEVICE_ITEM } from '../mutation-types'
import { fetchList, fetchDevice } from '@/api/devices'

const state = {
    list: [],
    item: {
        images: {},
        information: {},
        parameters: [],
    },
}

const getters = {
    imageList: state => (key)=> {
        const images = state.item.images 
        if (state.item.images.hasOwnProperty(key)) {
            return images[key]
        } else {
            return []
        }
    },
    information: state => state.item.information,
    parameters: state=> state.item.parameters,
    getItemById: state => (id) => {
        return state.list.find(dev => dev.id === id)
    },
}

const mutations = {
    [SET_DEVICES_LIST] (state, { list, }) {
        state.list = list
    },
    [SET_DEVICE_ITEM] (state, { item, }) {
        state.item = item
    },
}

const actions = {
    getDevices ({ commit, }) {
        fetchList().then(response => {
            commit('SET_DEVICES_LIST', {
                list: response.data.items,
            })
        })
    },
    getDevice({ commit, }, id) {
        fetchDevice(id).then(response => {
            commit('SET_DEVICE_ITEM', {
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
    mutations
}