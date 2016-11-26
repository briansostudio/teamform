import * as types from '../mutation-types'
import schema from './schema'
import api from '../../api'
import util from '../util'
import eventLib from '../../lib/event'
import Vue from 'vue'

// initial team state
const state = {
	id: '',
	name: '',
	description: '',
	members: [],//array of id
	requests: [],
	tags: [],
	leader: {},
	size: 0,
}

const getters = {
  viewingTeam: state => state,
  isLeaderOfViewingTeam: (state, getters, rootState) => getters.currentUser.id === state.leader.id,
  isMemberOfViewingTeam: (state, getters, rootState) => {
    let currentUserId = getters.currentUser.id;
    return !!util.find(state.members, member => member.id === currentUserId);
  },
  isRequestSentToViewingTeam: (state, getters, rootState) => !!util.filter(state.requests,request=>request.member === getters.currentUser.id).length,
  teamSchedule: state => {
    let result = {};
    for(let member of state.members){
      result[member.id] = member;
    }
    console.log(JSON.parse(JSON.stringify(result)));
    return result;
  },
  viewingTeamRequests: (state, getters, rootState) => state.requests.map(request => {
    return Object.assign({},request,{
      member: eventLib.getComputedMember(request.member, rootState.event)
    })
  }),
	teamName: state => state.name,
	teamDescription: state => state.description,
	teamTags: state => state.tags,
	teamSize: state => state.size,
  teamMembers: (state, getters, rootState) => state.members
}

// mutations for individual team

const mutations = {
  "team/updateTeam" (state, {team}){
    //Object.assign(state, team);
	  for(let key in team){
	    Vue.set(state, key, team[key]);
    }
    console.log("team/updateTeam",state);
  }
}

const actions = {
  "team/onLoad" ({rootState, dispatch}, {teamId}){
    let team = util.find(rootState.event.teams,team=>team.id == teamId);
    if(team)
      dispatch("team/dispatchUpdateTeam",{team: team});
  },
  "team/dispatchUpdateTeam" ({rootState, commit}, {team}){
    let meta = eventLib.computeTeamMeta(team,rootState.event);
    for(let member of meta.members){
      Object.assign(member, eventLib.computeMemberMeta(member, rootState.event));
    }
    commit("team/updateTeam", {team:Object.assign({}, team, meta)});
  },
	"request/sendJoinTeamRequest"({commit, state, rootState, getters}, {message}){
    api.sendJoinTeamRequest(rootState.event.id, getters.currentUser.id, state.id, message);
	},
	"request/acceptJoinTeamRequest"({commit, state, rootState}, {requestId}){
    api.acceptJoinTeamRequest(rootState.event.id, requestId);
	}
}

export default {
  state,
  getters,
  actions,
  mutations
}
