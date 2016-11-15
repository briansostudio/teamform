import * as types from '../mutation-types'

const state = {
    errors: {
        validation: [],
        system: [],
        misc: []
    }
}

const getters = {
    validationErrors: state => state.errors.validation,
    systemErrors: state => state.errors.system,
    undefinedErrors: state => state.errors.misc
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
        state.errors.validation.push(message)
    },
    [types.ERRORS_NOTIFY_SYSTEM](state, { message }){
        state.errors.system.push(message)
    },
    [types.ERRORS_NOTIFY_UNDEFINED](state, { message }){
        state.errors.misc.push(message)
    },
    [types.ERRORS_DISMISS_INVALIDATED](state){
        state.errors.validation.shift()
    },
    [types.ERRORS_DISMISS_SYSTEM](state){
        state.errors.validation.shift()
    },
    [types.ERRORS_DISMISS_UNDEFINED](state){
        state.errors.validation.shift()
    }

}

export default {
    state,
    actions,
    mutations
}