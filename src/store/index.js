import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

import event from './modules/event'
import team from './modules/team'
import member from './modules/member'
import errors from './modules/errors'
import view from './modules/view'

Vue.use(Vuex)

const state = {
    appName: 'Teamform By BrianSoStudio',
    
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules:{
        event,
        team,
        member,
        errors,
        view
    }
})