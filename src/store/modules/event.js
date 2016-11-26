import * as types from '../mutation-types'
import api from '../../api'
import util from '../util'

const state = {
    id: '',
    name: '',
    description: '',
    limits: {
        min: 0,
        max: 0
    },
    criteria: [],
    teams: [],
    members: {},
    errors: [],
    due: Date()
}

const getters = {
    currentEvent: state => state,
    eventId: state => state.id,
    eventName: state => state.name,
    eventDescription: state => state.description,
    eventMaxTeamSize: state => state.limits.max,
    eventMinTeamSize: state => state.limits.min,
    eventScopedCriteria: state => state.criteria,
    eventParticipatedTeams: state => state.teams,
    eventParticipatedMembers: state => state.members
}

const mutations = {
    [types.EVENT_ID_CHANGED](state, { eventId }){
      state.id = eventId;
    },
    [types.EVENT_FETCHED](state, { event }){
        state.name = event.name
        state.description = event.description
        state.limits.min = event.teamSize.min
        state.limits.max = event.teamSize.max
        state.members = event.members;
      state.teams = util.toArray(event.teams)
      state.criteria = event.criteria;
    },
    [types.EVENT_NAME_UPDATED](state, name){
        state.name = name
    },
    [types.EVENT_DESCRIPTION_UPDATED](state, description){
        state.description = description
    },
    [types.EVENT_TEAMSIZE_MIN_UPDATED](state, size){
        state.limits.min = size
    },
    [types.EVENT_TEAMSIZE_MAX_UPDATED](state, size){
        state.limits.max = size
    },
    [types.EVENT_ADD_RECRUIT_CRITERIA](state, criterion){
        state.criteria.push(criterion)
    },
    [types.EVENT_DISCARD_RECRUIT_CRITERIA](state, criterion){
        let index = state.criteria.indexOf(criterion);
        state.criteria.slice(index, 1)
    },
    [types.EVENT_DUE_UPDATE](state, { deadline }){
        state.due = deadline
    }
}

const actions = {
    "event/onLoad"({commit,dispatch, rootState}, {eventId}){
      commit(types.EVENT_ID_CHANGED, {eventId});
      api.event.observe(eventId, (event)=>{
        if(event !== null){
          commit(types.EVENT_FETCHED, {eventId, event});

          let user = event.members[rootState.member.id];
          if(user){
            dispatch("member/dispatch_UPDATE", {user});
          }

          let team = event.teams[rootState.route.params.teamId];
          if(team){
            dispatch("team/dispatchUpdateTeam", {team});
          }
        }else{
          //Event not found
        }
      });
    },
    "event/onLeave"({commit}, {eventId}){
      api.event.stopObserve(eventId);
    },
    createEvent({commit}, payload){
        api.eventExist(payload).then((exist) => {
            if(exist){
                commit(types.ERRORS_NOTIFY_INVALIDATED, {
                    message: 'Event already exist, please retry'
                })
            }
            else{
                api.createEvent(payload).then(key=>{

                });
            }
        })
    },
    fetchEvent({commit}, payload){
        api.event.eventExist(payload).then((exist) => {
            if(exist){
                api.loadEvent(payload, (event) => {
                    commit(types.EVENT_FETCHED, event)
                })
            }
            else{
                commit(types.ERRORS_NOTIFY_INVALIDATED, {
                    message: 'Event does not exist, please retry',
                    type: 'error',
                    duration: 0,
                    onClose(){
                        this.$store.dispatch('dismissValidationErrorMessage')
                    }
                })
            }
        })
    },
    setMaximumTeamSize({commit, state}, payload){
        api.event.updateEvent(state.id, {teamSize: { max : payload, min: state.limits.min }}).then(() => {
            commit(types.EVENT_TEAMSIZE_MAX_UPDATED, payload);
        }) ;
    },
    setMinimumTeamSize({commit, state}, payload){
        api.event.updateEvent(state.id, {teamSize: { max: state.limits.max, min : payload }}).then( () => {
            commit(types.EVENT_TEAMSIZE_MIN_UPDATED, payload);
        });
    },
    updateEventDescription({commit}, payload){
        console.log(payload)
        api.event.updateEvent(state.id, { description: payload }).then( () => {
            commit(types.EVENT_DESCRIPTION_UPDATED, payload)
        })
    },
    updateEventName({commit}, payload){
        console.log(payload)
        api.event.updateEvent(state.id, { name: payload}).then( () => {
            commit(types.EVENT_NAME_UPDATED, payload)
        })
    },
    addRecruitCriteria({commit}, payload){
        let updatedCriteria = state.criteria
        updatedCriteria.push(payload)
        api.event.updateEvent(state.id, {criteria: updatedCriteria}).then( () => {
            commit(types.EVENT_ADD_RECRUIT_CRITERIA, payload)
        })
    },
    discardRecruitCriteria({commit}, payload){
        let updatedCriteria = state.criteria
        updatedCriteria.splice(updatedCriteria.indexOf(payload), 1)
        api.event.updateEvent(state.id, {criteria: updatedCriteria}).then( () => {
            commit(types.EVENT_DISCARD_RECRUIT_CRITERIA, payload)
        })
    },
    setEventDeadline({commit}, payload){
        commit(types.EVENT_DUE_UPDATE, payload)
    }

}

export default {
  state,
  getters,
  actions,
  mutations
}
