import * as types from '../../mutation-types'

const state = {
    login: {
        isModalPresent: false,
        role: 'participants',
        step: 1,
        isRegister: false,
        form:{
          email: '',
          username: '',
          password: '',
          confirmPassword: '',
        }
    }
}

const getters = {
    isRegister: state => state.login.isRegister,
    isLoginModalPresenting: state => state.login.isModalPresent,
    displayCurrentRoleSelection: state => state.login.role,
    currentLoginStep: state => state.login.step
}

const actions = {
    toggleLoginModal({commit}, show){
      setTimeout(()=>{
        commit(types.LOGIN_TOGGLE_MODAL, show);
      },200);

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
    loginOrRegister({commit, state, dispatch}){
        let name = state.login.form.username;
        let email = state.login.form.email;
        let password = state.login.form.password;
        if(state.login.isRegister){
          dispatch("member/register",{name,email,password});
        }else{
          dispatch("member/login",{email,password});
        }
    },
    "home/loginFormUpdate"({commit},form){
      commit("home/loginFormUpdate",form, { silent: false });
    }
}

const mutations = {
    "home/loginFormUpdate"(state, form){
      state.login.form = form;
    },
    [types.LOGIN_TOGGLE_MODAL](state, show){
      if(typeof show === "undefined")
        state.login.isModalPresent = !state.login.isModalPresent
      else
        state.login.isModalPresent = show;
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
