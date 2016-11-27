import api from '../../../api';

const state = {
}

const getters = {
}

const actions = {
  "removeMemberFromViewingTeam"({state, getters, rootState},member){
    let eventId = rootState.event.id;
    let userId = member.id;
    let teamId = getters.viewingTeam.id;
    api.member.leaveTeam(eventId, userId, teamId).then(()=>console.log('FINISH','leaveTeam'));
  },
  "teamManagementAcceptRequest"({state, getters, rootState}, request){
    api.acceptJoinTeamRequest(rootState.event.id, request.id).then(()=>console.log('FINISH','acceptJoinTeamRequest'));
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
