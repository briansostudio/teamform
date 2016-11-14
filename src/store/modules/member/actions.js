import api from '../../../api/member'
import util from '../../util'
import lib from './lib'
import * as types from './mutation-types'
import router from '../../../router'

let observers = {};

export default {
  register({state, commit, rootState, dispatch}, {name, email, password}){

    let eventId = util.eventId(rootState);
    api.register({eventId, name, email, password}).then((userId)=>{
      dispatch("observeUser", {userId});
      
      router.push(`/event/${eventId}/user/${userId}/`)
    },(err)=>{
      if(err.code && err.message){
        commit(types.LOGIN_ERROR,{message: err.message});
      }else{
        commit(types.LOGIN_ERROR,{message:"System error: " + err.message});
      }
    })
  },
  observeUser({state, commit, rootState}, {userId}){
    let user = state.loaded[userId];
    if(user == null){
      user = lib.mockMember();
      commit(types.INIT, {userId, user})
    }
    if(user.observer++ <= 0){
      let eventId = util.eventId(rootState);
      let ref = api.getFireBaseRef(userId, eventId);

      let value = ref.on("value",(snapshot)=>{
        commit(types.UPDATED,{snapshot})
      });

      observers[userId] = {
        ref, value
      };
    }
  },
  stopObserveUser({state, commit, rootState}, {userId}){
    let user = state.loaded[userId];
    if(user == null)
      return;
    if(--user.observer <= 0){
      let {ref, value} = observers[userId];
      ref.off("value", value)
    }
  },
  beginReceiveUpdateForCurrentUser(context){
    let userId = api.getAuthUserId();
    this.beginReceiveUpdateForUser(context, {userId})
  },
  getUser({state,rootState}, payload){

  }
}
