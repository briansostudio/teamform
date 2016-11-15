/**
 * Created by brianso on 14/11/2016.
 */
import * as types from './mutation-types'
import Vue from 'vue';
import lib from './lib'

export default {
  [types.LOGIN_ERROR] (state, {message}){
    state.login.error = message;
  },
  [types.INIT] (state, {userId, user}){
    let mock = lib.mockMember();
    Object.assign(mock, user);
    Vue.set(state.loaded,userId, mock);
  },
  [types.UPDATED] (state, {userId, user}){
    let mock = lib.mockMember();
    Object.assign(mock, user);
    Vue.set(state.loaded,userId, mock);
  },
  [types.NAME_CHANGED] (state, { member, name }){
    member.name = name;
  },
  [types.TEAM_CHANGED] (state, { member, team }){
    member.team = team;
  }
}
