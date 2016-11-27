import lib from '../member/lib'
import eventLib from '../../../lib/event'
import api from '../../../api';

const state = {
}

const getters = {
  viewingUser(state, getters, rootState){
    let user = rootState.event.members[rootState.route.params.userId] || lib.mockMember();
    return Object.assign({}, user, eventLib.computeMemberMeta(user, rootState.event));
  },
  isViewingCurrentUser(state, getters, rootState){
    return getters.viewingUser.id === getters.currentUser.id;
  }
}

const actions = {
  "member/cancelJoinRequest"({rootState}, request){
    api.removeJoinTeamRequest(rootState.event.id,request.id);
  }
}

const mutations = {
}

export default {
    state,
    mutations,
    actions,
    getters
}
