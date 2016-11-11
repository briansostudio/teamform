import * as types from '../mutation-types'
import api from '../../api'

const state = {
    event: {
        team_size:{
            min: 0,
            max: 5
        }
    },
    status: null
}

const mutations = {
    displayError(state,error){
        state.errors.loginPageErrors.push(error) 
    },
    
}

const actions = {
    createEvent({commit}, payload){
        api.eventExist(payload).then((exist) => {
            if(exist){
                commit('displayError', 'Event Already Exists')
            }
            else{
                api.createEvent(payload).then(key=>{
                    //commit('finish',key);
                    console.log('finish');
                });
            }
        })
    },
    loadEvent({commit}, payload){
        api.eventExist(payload).then((exist) => {
            if(exist){
                api.loadEvent(payload, (event) => {
                    commit('loadEvent', event)
                })
            }
            else{
                commit('displayError', 'Event does not exist')
            }
        })
    },
    increaseMaximumTeamSize({commit}, payload){

    },
    decreaseMaximumTeamSize({commit}, payload){

    },
    increaseMinimumTeamSize({commit}, payload){

    },
    decreaseMinimumTeamSize({commit}, payload){

    }

}

export default {
  state,
  getters,
  actions,
  mutations
}