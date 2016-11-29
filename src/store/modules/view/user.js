import lib from '../member/lib'
import eventLib from '../../../lib/event'
import api from '../../../api';
import * as types from '../../mutation-types'

const state = {
	editing: false,
	viewingRequest: false
}

const getters = {
	viewingUser(state, getters, rootState){
		let user = rootState.event.members[rootState.route.params.userId] || lib.mockMember();
		return Object.assign({}, user, eventLib.computeMemberMeta(user, rootState.event));
	},
	isViewingCurrentUser(state, getters, rootState){
		return getters.viewingUser.id === getters.currentUser.id;
	},
	isEditingUser: state => state.editing,
	isRequestViewDisplaying: state => state.viewingRequest
}

const actions = {
	"member/cancelJoinRequest"({rootState}, request){
		api.removeJoinTeamRequest(rootState.event.id,request.id);
	},
	toggleEditMode({commit}){
		commit(types.USER_UPDATE_INFO)
	},
	toggleRequestView({commit}){
		commit(types.USER_VIEW_REQUESTS)
	}
}

const mutations = {
	[types.USER_UPDATE_INFO](state){
		state.editing = !state.editing
	},
	[types.USER_VIEW_REQUESTS](state){
		state.viewingRequest = !state.viewingRequest
	}
}

export default {
    state,
    mutations,
    actions,
    getters
}
