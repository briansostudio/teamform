import * as types from '../mutation-types'
import api from '../../api'

// initial team state
const state = {
	id: '',
	name: '',
	description: '',
	members: [],
	requests: [],
	tags: [],
	leader: '',
	size: 0
}

const getters = {

}

// mutations for individual team

const mutations = {
	[types.ADD_TO_TEAM] (state, { request }){

	},
	[types.INCREASE_TEAMSIZE] (state, { size }){
		state.size = size
	},
	[types.DECREASE_TEAMSIZE] (state, { size }){
		state.size = size
	},
	[types.ADD_JOIN_REQUEST] (state, {requests}){
		for(let req in requests){
			state.join_request.push(req)
		}
	}

}

const actions = {
	addJoinRequest({commit, state}, payload){
		const requests = payload
		commit(types.ADD_JOIN_REQUEST, { requests })
	},
	increaseSize({commit, state}, payload){
		const size = payload
		commit(types.INCREASE_TEAMSIZE, { size })
	},
	decreaseSize({commit, state}, payload){
		const size = payload
		commit(types.DECREASE_TEAMSIZE, { size })
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
