import md5 from 'blueimp-md5'
import api from '../../../api'
import * as types from '../../mutation-types'
import router from '../../../router'

const state = {
    isOrganizorAuthenticated: false,
    password: ''
}

const getters = {
    canUserManageEvent: state => state.isOrganizorAuthenticated,
    adminEnteredPassword: state => state.password
}

const actions = {
    adminLogin({commit, state, rootState, dispatch}, payload){
        let hashedPassphrase = md5(payload)
        let eventId = rootState.event.id
        api.event.authenticateAsOrganizer(eventId, hashedPassphrase).then( (isAuthenticated) => {
            if(isAuthenticated){
                commit(types.AUTH_EVENT_ORGANIZER_LOGIN, true)
                $('body').css("overflow","");
                router.push(`/event/${eventId}/manage`);
            }
            else{
                commit(types.AUTH_EVENT_ORGANIZER_LOGIN, false)
            }
        })
    },
    updatePasswordEntered({commit}, payload){
        commit(types.AUTH_PASSWORD_UPDATED, payload)
    }
}

const mutations = {
    [types.AUTH_EVENT_ORGANIZER_LOGIN](state, authState){
        state.isOrganizorAuthenticated = authState
    },
    [types.AUTH_PASSWORD_UPDATED](state, password){
        state.password = password
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
