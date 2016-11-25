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
  teamSchedule: state => {
    let result = {};
    for(let member of state.members){
      result[member.id] = member;
    }
    console.log(JSON.parse(JSON.stringify(result)));
    return result;
  },
	teamName: state => state.name,
	teamDescription: state => state.description,
	teamTags: state => state.tags,
	teamSize: state => state.size,
  teamMembers: (state, getters, rootState) => state.members
}

// mutations for individual team

const mutations = {
	[types.ADD_TO_TEAM] (state, { request }){

	},
	[types.MODIFY_TEAMSIZE] (state, { size }){
		state.size = size
	},
	[types.ADD_JOIN_REQUEST] (state, { requests }){
		for(req in requests){
			state.join_request.push(req)
		}
	},
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
	addJoinRequest({commit, state, rootState}, payload){
		const requests = payload
		commit(types.ADD_JOIN_REQUEST, { requests })
	},
	modifyTeamSize({commit, state}, payload){
		const size = payload
		commit(types.MODIFY_TEAMSIZE, { size })
	},
	approveJoinRequest({commit, state}, payload){
		const request = payload
		commit(types.ADD_TO_TEAM, { request })
	}
}

export default {
  state,
  getters,
  actions,
  mutations
}
