import * as types from '../../mutation-types'

const state = {
    criteria: []
}

const getters = {
    getCriteria: state => state.criteria
}

const actions = {
    addCriteria({commit}, payload){
        commit(types.EDIT_EVENT_ADD_CRITERIA, payload)
    },
    removeCriteria({ commit }, payload){
        commit(types.EDIT_EVENT_REMOVE_CRITERIA, payload)
    }
}

const mutations = {
    [types.EDIT_EVENT_ADD_CRITERIA](state, criterion){
        state.criteria.push(criterion)
    },
    [types.EDIT_EVENT_REMOVE_CRITERIA](state, index){
        state.criteria.splice(index, 1)
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}