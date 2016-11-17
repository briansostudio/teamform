import api from '../../../api'
import lib from './lib'
import router from '../../../router'
import Vue from 'vue';

const state = {
  id: sessionStorage.getItem('firebase.user.uid') || "",
  name: "",
  status: "NO_TEAM", // NO_TEAM, IN_TEAM, LEADER
  schedule: {
    intervals:{
    }
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
  "schedule/createInterval"({commit, rootState}, {interval}){
    api.member.addIntervalToSchedule(rootState.event.id, rootState.member.id, interval)
      .then((id)=>{
        commit("schedule/INTERVAL_ADDED", {id, interval});
      });
  },
  "schedule/moveInterval"({commit, rootState}, {id, interval}){
    api.member.updateIntervalInSchedule(rootState.event.id, rootState.member.id, id, interval);
    commit('schedule/INTERVAL_MOVED', {id, interval});
  },
  "schedule/removeInterval"({commit, rootState}, {id}){
    api.member.removeIntervalFromSchedule(rootState.event.id, rootState.member.id, id);
    commit('schedule/INTERVAL_REMOVED', {id});
  }
};

const mutations = {
  ["member/UPDATE"](state, {user}){
    Object.assign(state, user);
  },
  ["member/LOGIN_ERROR"](state, {}){

  },
  ["schedule/INTERVAL_ADDED"](state, {id, interval}){
    Vue.set(state.schedule.intervals, id, interval);
  },
  ["schedule/INTERVAL_MOVED"](state, {id, interval}){
    state.schedule.intervals[id] = interval;
  },
  ["schedule/INTERVAL_REMOVED"](state, {id}){
    Vue.delete(state.schedule.intervals, id);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
