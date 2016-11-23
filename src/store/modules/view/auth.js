import md5 from 'blueimp-md5'
import * as types from '../../mutation-types'

const state = {
    isOrganizorAuthenticated: false
}

const getters = {
    canUserManageEvent: state => state.isOrganizorAuthenticated
}

const actions = {
    adminLogin({commit, state, rootState, dispatch}, payload){
        let hashedPassphrase = md5(payload)
        api.authenticateAsOrganizer(rootState.event.id, hashedPassphrase).then( (isAuthenticated) => {
            if(isAuthenticated){
                commit(types.AUTH_EVENT_ORGANIZER_LOGIN, true)
            }
            else{
                commit(types.AUTH_EVENT_ORGANIZER_LOGIN, false)
            }
        })
    }
}

const mutations = {
    [types.AUTH_EVENT_ORGANIZER_LOGIN](state, authState){
        state.isOrganizorAuthenticated = authState
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}