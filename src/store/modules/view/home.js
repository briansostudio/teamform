import * as types from '../../mutation-types'

const state = {
    login: {
        isModalPresent: false,
        role: 'participants'
    }
}

const getters = {
    isLoginModalPresenting: state => state.login.isModalPresent,
    displayCurrentRoleSelection: state => state.login.role
}

const actions = {
    toggleLoginModal({commit}){
        commit(types.LOGIN_TOGGLE_MODAL)
    },
    selectRoleForLogin({commit}, payload){
        commit(types.LOGIN_SELECT_ROLE, payload)
    }
}

const mutations = {
    [types.LOGIN_TOGGLE_MODAL](state){
        state.login.isModalPresent = !state.login.isModalPresent
    },
    [types.LOGIN_SELECT_ROLE](state, { role }){
        state.login.role = role
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}