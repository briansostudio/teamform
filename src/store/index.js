import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
//import * as mutations from './mutations'

import member from './modules/member';

Vue.use(Vuex);

const state = {
    errors:{
        loginPageErrors:[]
    }
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    //mutations
    modules: {
      member
    }
})
