import * as types from '../mutation-types'
import api from '../../api'

// initial team state
const state = {
	id: { parent: '', self: '' },
	name: '',
	description: '',
	members: [],
	requests: [],
	tags: [],
	leader: '',
	size: 0
}

const getters = {
	teamName: state => state.name,
	teamDescription: state => state.description,
	teamTags: state => state.tags,
	teamSize: state => state.size
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
	}
	
}

const actions = {
	addJoinRequest({commit, state}, payload){
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