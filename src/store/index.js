import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
    appName: 'Teamform By BrianSoStudio',
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})