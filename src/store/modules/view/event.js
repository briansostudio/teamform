const state = {
  filter:{

  }
}

const getters = {
  filteredTeams:(state,getters,rootState)=>rootState.event.teams
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
