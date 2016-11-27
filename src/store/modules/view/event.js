import eventLib from '../../../lib/event'

const state = {
  filter:{

  }
}

const getters = {
  filteredTeams:(state,getters,rootState)=>{
    return rootState.event.teams.map((team)=>{
      return Object.assign({},team, eventLib.computeTeamMeta(team, rootState.event));
    });
  },
  allTeams:(state,getters,rootState)=>{
    return rootState.event.teams.map((team)=>{
      return Object.assign({},team, eventLib.computeTeamMeta(team, rootState.event));
    });
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
