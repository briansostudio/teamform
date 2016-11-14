import * as getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  loaded:{
    // ... user data, see lib.mockUser()
  },
  login:{
    error: null
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
