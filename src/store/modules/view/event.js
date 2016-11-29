import eventLib from '../../../lib/event'
import Vue from 'vue'

const state = {
  sortingCriteria:'',
  filter:''
};

const getters = {
  teamFilterString(state){
    return state.filter;
  },
  allTeams:(state,getters,rootState)=>{
    return rootState.event.teams.map((team)=>{
      return Object.assign({},team, eventLib.computeTeamMeta(team, rootState.event));
    });
  },
  filteredTeams:(state,getters,rootState)=>{

    let currentUser = getters.currentUser;

    let sortingCriteria = state.sortingCriteria;
    let filterString = state.filter;
    let regex = new RegExp(filterString,'i');
    let filteredTeams = getters.allTeams.filter((team)=>{
      if(regex.test(team.name)){
        return true;
      }
      if(team.tags){
        for(let tag of team.tags){
          if(regex.test(tag)){
            return true;
          }
        }
      }
      return false;
    });

    let preprocessFunc = null;
    let sortFunc = null;
    switch (sortingCriteria){
      case 'name':
        sortFunc = (teamA, teamB)=>{
          return teamA.name.localeCompare(teamB.name);
        };
        break;
      case 'schedule_matching':
        preprocessFunc = (team)=>{
          team = Object.assign({},team);
          Vue.set(team,'deltaMember', currentUser);
          Vue.set(team,'deltaTeam', eventLib.deltaTeam(team, currentUser, rootState.event));
          Vue.set(team,'deltaFreeTime',team.deltaTeam.freeHours - team.freeHours);
          return team;
        };
        sortFunc = (teamA, teamB)=>{
          return -((teamA.deltaTeam.freeHours - teamA.freeHours) - (teamB.deltaTeam.freeHours - teamB.freeHours));
        };
        break;
      case 'influence':
        preprocessFunc = (team)=>{
          team = Object.assign({},team);
          Vue.set(team,'deltaMember', currentUser);
          Vue.set(team,'deltaTeam', eventLib.deltaTeam(team, currentUser, rootState.event));
          return team;
        };
        sortFunc = (teamA, teamB)=>{
          let influenceA = teamA.deltaTeam.skillValues[teamA.weaknessIndex] - teamA.skillValues[teamA.weaknessIndex];
          let influenceB = teamB.deltaTeam.skillValues[teamB.weaknessIndex] - teamB.skillValues[teamB.weaknessIndex];
          return influenceB - influenceA;
        };
        break;
      default:
        break;
    }

    let processedTeams = filteredTeams;
    if(preprocessFunc){
      processedTeams = filteredTeams.map(preprocessFunc);
    }

    let sortedTeams = processedTeams;
    if(sortFunc){
      sortedTeams = processedTeams.sort(sortFunc);
    }
    // if(sortedTeams.length > 0 && sortedTeams[0].deltaTeam){
    //   sortedTeams = sortedTeams.map(m => m.deltaTeam);
    // }
    return sortedTeams;
  },
};

const actions = {
  "event/dispatchSortCriteriaChanged"({state,commit},sortingCriteria){
    commit('event/sortCriteriaChanged',sortingCriteria);
  },
  "event/dispatchFilterStringChanged"({commit},filterString){
    commit('event/FilterStringChanged', filterString)
  }
};

const mutations = {
  "event/sortCriteriaChanged"(state, sortingCriteria){
    state.sortingCriteria = sortingCriteria;
  },
  'event/FilterStringChanged'(state, filterString){
    state.filter = filterString;
  }
};

export default {
    state,
    mutations,
    actions,
    getters
}
