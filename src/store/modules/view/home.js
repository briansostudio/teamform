import * as types from '../../mutation-types'
import api from '../../../api';

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
    },
    eventList:[
    ]
}

const getters = {
    eventInput: state => state.eventInput,
    isRegister: state => state.login.isRegister,
    isLoginModalPresenting: state => state.login.isModalPresent,
    displayCurrentRoleSelection: state => state.login.role,
    currentLoginStep: state => state.login.step,
    eventList: state => state.eventList
}

const actions = {
    toggleLoginModal({commit, state}, show){
      setTimeout(()=>{
        commit(types.LOGIN_TOGGLE_MODAL, show);
      },200);
      if(state.login.isModalPresent){
          commit(types.LOGIN_STEP_RESET)
      }

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
    'home/onLoad'({commit}){
      api.event.getEventList().then((events)=>{
        let result = [];
        for(let id in events){
          result.push({id, value: events[id]});
        }
        commit('home/eventListUpdate', result);
      });
    },
    "home/loginFormUpdate"({commit},form){
      commit("home/loginFormUpdate",form, { silent: false });
    }
}

const mutations = {
    "home/loginFormUpdate"(state, form){
		state.login.form = form;
    },
    "home/eventListUpdate"(state, events){
      state.eventList = events;
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
