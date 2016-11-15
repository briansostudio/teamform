import api from '../../../api'
import lib from './lib'
import router from '../../../router'

const state = {
  id: sessionStorage.getItem('firebase.user.uid') || "",
  name: "",
  status: "NO_TEAM", // NO_TEAM, IN_TEAM, LEADER
  schedule: {
    intervals:[
    ]
  },
  description: "",
  criteria:[
  ]
};

const getters = {
};

const actions = {
  "member/register"({state, commit, rootState, dispatch}, {name, email, password}){
    let eventId = rootState.event.id;
    let user = lib.mockMember();
    user.name = name;
    user.description = "no description yet";


    api.member.register(eventId, {email, password}, user).then((userId)=>{
      sessionStorage.setItem('firebase.user.uid', userId);
      router.push(`/event/${eventId}/user/${userId}/`);

    },(err)=>{
      if(err.code && err.message){
        commit("member/LOGIN_ERROR",err);
      }else{
        commit("member/LOGIN_ERROR","System Error:" + err);
      }
    })
  },
  "member/login"({state, commit, rootState, dispatch}, {email, password}){
    let eventId = rootState.event.id;

    api.member.login(eventId, {email, password}).then((userId)=>{
      sessionStorage.setItem('firebase.user.uid', userId);
      let user = rootState.event.members[userId];
      if(user){
        commit("member/UPDATE", {user});
      }else{
        console.error("SHOULD NOT COME HERE #12532");
      }
      router.push(`/event/${eventId}/`);
    },(err)=>{
      if(err.code && err.message){
        commit("member/LOGIN_ERROR",err);
      }else{
        commit("member/LOGIN_ERROR","System Error:" + err);
      }
    })
  },
};

const mutations = {
  ["member/UPDATE"](state, {user}){
    Object.assign(state, user);
  },
  ["member/LOGIN_ERROR"](state, {}){

  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
