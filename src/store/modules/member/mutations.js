/**
 * Created by brianso on 14/11/2016.
 */
import * as types from './mutation-types'

export default {
  [types.LOGIN_ERROR] (state, {message}){
    state.login.error = message;
  },
  [types.INIT] (state, {userId, user}){
    state.loaded[userId] = user;
  },
  [types.UPDATED] (state, {userId, user}){
    state.loaded[userId] = user;
  },
  [types.NAME_CHANGED] (state, { member, name }){
    member.name = name;
  },
  [types.TEAM_CHANGED] (state, { member, team }){
    member.team = team;
  }
}
