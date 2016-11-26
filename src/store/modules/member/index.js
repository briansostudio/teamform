import api from '../../../api'
import lib from './lib'
import router from '../../../router'
import * as types from '../../mutation-types'
import Vue from 'vue';
import schema from '../schema'
import util from '../../util'
import eventLib from '../../../lib/event'
import $ from 'jquery';

const state = {
  id: sessionStorage.getItem('firebase.user.uid') || "",
  name: "",
  status: "NO_TEAM", // NO_TEAM, IN_TEAM, LEADER
  schedule: {
    intervals:{
    }
  },
  team:'',
  description: "",
  criteria:[
  ]
};

const getters = {
  currentUser: state => state,
  userStatus: state => state.status,
  userTeam: (state,getters,rootState)=>{
    let team = util.find(rootState.event.teams,team=>team.id === state.team) || schema.team();
    return Object.assign({},team,eventLib.computeTeamMeta(team, rootState.event));
  },
  currentUserRequests: (state, getters, rootState) => {
    return util.filter(getters.allRequests,request=>request.member === getters.currentUser.id,true).map(request=>{
      console.log('REQUEST',request);
      console.log(rootState.event.teams[request.team]);
      return Object.assign({},request,{
        team:eventLib.computeTeamMeta(rootState.event.teams[request.team],rootState.event)
      });
    });
  }
};

const actions = {
  "member/becomeLeader"({state, commit, rootState, dispatch}, {teamId}){
    let eventId = rootState.event.id;
    api.member.updateMember(state.id, eventId, {
      status: "LEADER",
      team: teamId
    });
  },
  "team/createTeam"({commit, state, rootState, dispatch}, {name}){
    if(!state.id){
      throw {code:'app/no-user-login', message:"No user is logged in to create this team, please Login and retry"}
    }
    if(state.status !== 'NO_TEAM'){
      throw {code: 'app/already-have-team', message:"You cannot create a team as you are still in a team"}
    }
    let team = schema.team(rootState.member.id);
    team.name = name;
    api.team.createTeam(rootState.event.id, team).then(teamId=>{
      console.log(teamId);
      dispatch('member/becomeLeader', {teamId})
    });
  },
  "member/register"({state, commit, rootState, dispatch}, {name, email, password}){
    let eventId = rootState.event.id;
    let user = lib.mockMember();
    user.name = name;
    user.description = "no description yet";


    api.member.register(eventId, {email, password}, user).then((userId)=>{
      sessionStorage.setItem('firebase.user.uid', userId);
      commit('member/USER_ID_CHANGED',{userId});
      $('body').css("overflow","");
      router.push(`/event/${eventId}/user/${userId}/`);

    },(err)=>{
      if(err.code && err.message){
        commit(types.ERRORS_NOTIFY_SYSTEM,err);
      }else{
        commit(types.ERRORS_NOTIFY_UNDEFINED,err);
      }
    })
  },
  "member/login"({state, commit, rootState, dispatch}, {email, password}){
    let eventId = rootState.event.id;

    api.member.login(eventId, {email, password}).then((userId)=>{
      sessionStorage.setItem('firebase.user.uid', userId);
      commit('member/USER_ID_CHANGED',{userId});
      $('body').css("overflow","");
      router.push(`/event/${eventId}/`);
    },(err)=>{
      if(err.code && err.message){
        commit(types.ERRORS_NOTIFY_SYSTEM,err);
      }else{
        commit(types.ERRORS_NOTIFY_UNDEFINED,err);
      }
    })
  },
  "member/socialLogin"({state, commit, rootState, dispatch}, platform){
    let eventId = rootState.event.id
    api.member.socialLogin(platform, eventId).then(({userId, firstTimeUser})=>{
      sessionStorage.setItem('firebase.user.uid', userId);
      commit('member/USER_ID_CHANGED',{userId});
      $('body').css("overflow","");
      if(firstTimeUser){
        router.push(`/event/${eventId}/user/${userId}/`);
      }else{
        router.push(`/event/${eventId}/`);
      }

    },(err)=>{
      if(err.code && err.message){
        commit(types.ERRORS_NOTIFY_SYSTEM,err);
      }else{
        commit(types.ERRORS_NOTIFY_UNDEFINED,err);
      }
    }
    )
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
  },
  "member/dispatch_UPDATE"({commit, rootState}, {user}){
    commit("member/UPDATE",{user: Object.assign({}, user, eventLib.computeMemberMeta(user, rootState.event))});
  }
};

const mutations = {
  ["member/USER_ID_CHANGED"](state, {userId}){
    state.id = userId;
  },
  ["member/UPDATE"](state, {user}){
    Object.assign(state, user);
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
