/**
 * Created by brianso on 14/11/2016.
 */
import api from '../../../api';
import lib from './lib'
const {mockMember} = lib;

export const viewingUser = (state, getters, rootState) => {
  return state.loaded[rootState.route.params.userId] || mockMember();
};
export const currentUser = (state, getters, rootState) => {
  return state.loaded[api.member.getAuthUserId()] || mockMember();
};
export const isViewingCurrentUser = (state, getters, rootState) => {
  return api.member.getAuthUserId() === rootState.route.params.userId;
};
export const memberId = state => state.id;
export const memberSchedule = state => state.schedule;
export const memberQualities = state => state.qualities;
