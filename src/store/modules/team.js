import * as types from '../mutation-types'
import schema from './schema'
import api from '../../api'
import util from '../util'
import eventLib from '../../lib/event'

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
	  Object.assign(state, team);
  }
}

const actions = {
  "team/dispatchUpdateTeam" ({rootState, commit}, {team}){
    commit("team/updateTeam", {team:Object.assign({}, team, eventLib.computeTeamMeta(team,rootState.event))});
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
