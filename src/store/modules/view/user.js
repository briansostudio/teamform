import lib from '../member/lib'

const state = {
  viewingUser:lib.mockMember()
}

const getters = {
  viewingUser(state){
    return state.viewingUser;
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
