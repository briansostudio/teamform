import * as types from '../../mutation-types'

const state = {
    login: {
        isModalPresent: false,
        role: 'participants',
        step: 1,
        isRegister: false
    }
}

const getters = {
    isRegister: state => state.login.isRegister,
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
    },
    toggleRegister({commit}){
        commit(types.LOGIN_TOGGLE_REGISTER)
    },
    loginOrRegister({commit, dispatch}){
        if(state.login.isRegister){
          dispatch("register",{});
        }else{
          dispatch("login",{});
        }
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
    },
    [types.LOGIN_TOGGLE_REGISTER](state){
        state.login.isRegister = !state.login.isRegister;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
