const state = {
  filter:{

  }
}

const getters = {
  filteredTeams:(state,getters,rootState)=>{
    return rootState.event.teams;
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
