import * as types from '../mutation-types'

const state = {
    validation: [],
    system: [],
    misc: []
}

const getters = {
    validationErrors: state => state.validation,
    systemErrors: state => state.system,
    undefinedErrors: state => state.misc
}

const actions = {
    dismissValidationErrorMessage({commit}){
        commit(types.ERRORS_DISMISS_INVALIDATED)
    },
    dismissSystemErrorMessage({commit}){
        commit(types.ERRORS_DISMISS_SYSTEM)
    },
    dismissUndefinedErrorMessage({commit}){
        commit(types.ERRORS_DISMISS_UNDEFINED)
    }
}

const mutations = {
    [types.ERRORS_NOTIFY_INVALIDATED](state, { message }){
        state.validation.push(message)
    },
    [types.ERRORS_NOTIFY_SYSTEM](state, { message }){
        state.system.push(message)
    },
    [types.ERRORS_NOTIFY_UNDEFINED](state, { message }){
        state.misc.push(message)
    },
    [types.ERRORS_DISMISS_INVALIDATED](state){
        state.validation.shift()
    },
    [types.ERRORS_DISMISS_SYSTEM](state){
        state.validation.shift()
    },
    [types.ERRORS_DISMISS_UNDEFINED](state){
        state.validation.shift()
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}