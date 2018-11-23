import {
    login,
    register as registerUser,
    logout as logoutUser,
} from '@/api/user'

import {
    SET_USER_PROFILE,
} from '../mutation-types'

import { router, } from '@/router'
import weui from 'weui.js'

const getState = function(key) {
    const user = JSON.parse(localStorage.getItem(key))
    if (user) {
        return { status: { loggedIn: true }, user, }
    } else {
        return { status: {}, user: null, }
    }
}

const state = getState('user')

const getters = {
    loginName: state => {
        return state.user.name
    },
}

const mutations = {
    [SET_USER_PROFILE] (state, user) {
        state.user = user
    },
}

const actions = {
    authenticate({ dispatch, commit }, { username, password, }) {
        login({ username, password, })
            .then(
                user => {
                    commit(SET_USER_PROFILE, user)
                    weui.toast('登录成功', 1500)
                    router.push('/')
                },
                error => {
                    weui.topTips(error, {
                        duration: 1500,
                    })
                }
            )
    },
    logout({ commit, }) {
        logoutUser()
    },
    register({ dispatch, commit }, user) {
        registerUser(user)
            .then(
                user => {
                    commit(SET_USER_PROFILE, user)
                    weui.toast('注册成功', 1500)
                    router.push('/')
                },
                error => {
                    weui.topTips(error, {
                        duration: 1500,
                    })
                },
            )
    },
    onRegister() {
        router.push('/register')
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,    
    actions,
}