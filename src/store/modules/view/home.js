import * as types from '../../mutation-types'

const state = {
    login: {
        isModalPresent: false,
        role: 'participants',
        step: 1
    }
}

const getters = {
    isLoginModalPresenting: state => state.login.isModalPresent,
    displayCurrentRoleSelection: state => state.login.role,
    currentLoginStep: state => state.login.step
}

const actions = {
    toggleLoginModal({commit}){
        commit(types.LOGIN_TOGGLE_MODAL)
        commit(types.LOGIN_STEP_RESET)
    },
    selectRoleForLogin({commit}, payload){
        commit(types.LOGIN_SELECT_ROLE, payload)
    },
    stepIncrement({commit}, payload){
        commit(types.LOGIN_STEP_PROGRESS)
    }
}

const mutations = {
    [types.LOGIN_TOGGLE_MODAL](state){
        state.login.isModalPresent = !state.login.isModalPresent
    },
    [types.LOGIN_SELECT_ROLE](state, role){
        state.login.role = role
    },
    [types.LOGIN_STEP_PROGRESS](state){
        state.login.step+=1
    },
    [types.LOGIN_STEP_RESET](state){
        state.login.step = 1
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}