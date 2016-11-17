import lib from '../member/lib'

const state = {
}

const getters = {
  viewingUser(state, getters, rootState){
    return rootState.event.members[rootState.route.params.userId] || lib.mockMember();
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
