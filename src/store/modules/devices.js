import {
    SET_DEVICES_LIST,
    SET_DEVICE_ITEM,
    SET_FORMDATA_CONNECT,
    SET_FORMDATA_DETAIL,
    SET_FORMDATA_REMARK,
    SET_FORMDATA_FILES,
} from '../mutation-types'

import weui from 'weui.js'
import { fetchList, fetchDevice, maintainDevice, } from '@/api/devices'

const state = {
    list: [],
    item: {
        images: {},
        information: {},
        parameters: [],
    },
    formData: {
        connection: null,
        detail: null,
        remark: null,
        files: null,
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
    validForm: state => {
        if (!state.formData.connection) {
            weui.topTips('请输入联系方式', {
                duration: 1500,
            })
            return false
        } else if (!state.formData.detail) {
            weui.topTips('请输入故障描述', {
                duration: 1500,
            })
            return false
        }

        return true
    },
    getPostData: state => {
        const data = new FormData()
        const { connection, detail, remark, files } = state.formData

        data.append('name', connection.name)
        data.append('phone', connection.phone)
        data.append('descibe', detail)
        data.append('remark', remark)
        if (files && files.length) {
            for (let index = 0, len = files.length; index < len; index++) {
                data.append('file-image' + index, files)
            }
        }
        
        return data
    },
}

const mutations = {
    [SET_DEVICES_LIST] (state, { list, }) {
        state.list = list
    },
    [SET_DEVICE_ITEM] (state, { item, }) {
        state.item = item
    },
    [SET_FORMDATA_CONNECT] (state, value) {
        state.formData.connection = value
    },
    [SET_FORMDATA_DETAIL] (state, value) {
        state.formData.detail = value
    },
    [SET_FORMDATA_REMARK] (state, value) {
        state.formData.remark = value
    },
    [SET_FORMDATA_FILES] (state, value) {
        state.formData.files = value
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
    submit({ getters, }) {
        return new Promise((resolve, reject) => {
            maintainDevice(getters.getPostData).then(response => {
                const data = response.data
                if (data.code === 2000) {
                    resolve()
                } else {
                    reject()
                }
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}