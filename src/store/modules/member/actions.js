import api from '../../../api/member'
import util from '../../util'
import lib from './lib'
import * as types from './mutation-types'
import router from '../../../router'

let observers = {};

export default {
  register({state, commit, rootState, dispatch}, {name, email, password}){

    let eventId = util.eventId(rootState);
    let user = lib.mockMember();
    user.name = name;
    user.description = "no description yet";


    api.register(eventId, {email, password}, user).then((userId)=>{
      dispatch("observeUser", {userId});

      router.push(`/event/${eventId}/user/${userId}/`)
    },(err)=>{
      if(err.code && err.message){
        commit(types.LOGIN_ERROR,err);
      }else{
        commit(types.LOGIN_ERROR,err);
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
        commit(types.UPDATED,{userId, user:snapshot.val()})
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
  observeCurrentUser({dispatch}){
    let userId = api.getAuthUserId();
    dispatch("observeUser", {userId});
  },
  getUser({state,rootState}, payload){

  }
}
