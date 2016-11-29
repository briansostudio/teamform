import eventLib from '../../../lib/event'

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

    let sortingCriteria = state.sortingCriteria;
    let filterString = state.filter;
    let regex = new RegExp(filterString,'i');
    let filteredTeams = getters.allTeams.filter((team)=>{
      if(regex.test(team.name)){
        return true;
      }
      if(team.tags){
        for(tag of team.tags){
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
          console.log(team);
          return team;
        };
        sortFunc = (teamA, teamB)=>{
          return 0;
        };
        break;
      case 'influence':
        preprocessFunc = (team)=>{
          console.log(team);
          return team;
        };
        sortFunc = (teamA, teamB)=>{
          return 0;
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
