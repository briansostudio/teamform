import lib from '../member/lib'
import eventLib from '../../../lib/event'

const state = {
}

const getters = {
  viewingUser(state, getters, rootState){
    let user = rootState.event.members[rootState.route.params.userId] || lib.mockMember();
    return Object.assign({}, user, eventLib.computeMemberMeta(user, rootState.event));
  }
}

const actions = {
}

const mutations = {
}

export default {
    state,
    mutations,
    actions,
    getters
}
